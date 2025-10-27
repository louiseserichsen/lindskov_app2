import React, { useState, useEffect } from "react";
import { storage, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export default function UploadPage() {
  const [folderName, setFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [availableFolders, setAvailableFolders] = useState([]);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [status, setStatus] = useState("");
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateSection, setAnimateSection] = useState(false);

  // Fade-in animation triggers
  useEffect(() => {
    const timer = setTimeout(() => setAnimateTitle(true), 300);
    const sectionTimer = setTimeout(() => setAnimateSection(true), 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(sectionTimer);
    };
  }, []);

  // Hent eksisterende mapper
  useEffect(() => {
    async function fetchFolders() {
      try {
        const user = auth.currentUser;
        if (!user) return;
        const rootRef = ref(storage, `userFolders/${user.uid}/`);
        const folderList = await listAll(rootRef);
        const folders = folderList.prefixes.map((folderRef) => folderRef.name);
        setAvailableFolders(folders);
      } catch (err) {
        console.error("Kunne ikke hente mapper:", err);
      }
    }
    fetchFolders();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return setStatus("❌ Du skal være logget ind for at uploade filer");
    if (!file) return setStatus("❌ Vælg en fil først");

    const targetFolder = selectedFolder || folderName;
    if (!targetFolder) return setStatus("❌ Indtast eller vælg en mappe først");

    setUploading(true);
    const storageRef = ref(storage, `userFolders/${user.uid}/${targetFolder}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUploadedFiles((prev) => [...prev, { name: file.name, url: downloadURL }]);
      if (!availableFolders.includes(targetFolder)) {
        setAvailableFolders((prev) => [...prev, targetFolder]);
      }
      setStatus(`✅ Filen "${file.name}" blev uploadet til mappen "${targetFolder}"`);
      setFile(null);
      setFolderName("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload fejlede. Prøv igen.");
    } finally {
      setUploading(false);
    }
  };

  const handleSelectFolder = async (folder) => {
    setSelectedFolder(folder);
    const user = auth.currentUser;
    if (!user) return;
    const folderRef = ref(storage, `userFolders/${user.uid}/${folder}`);
    const filesList = await listAll(folderRef);
    const files = await Promise.all(
      filesList.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { name: itemRef.name, url };
      })
    );
    setUploadedFiles(files);
  };

  const getStatusStyle = () => {
    if (status.includes("❌ Vælg en fil først")) return { ...styles.status, color: "#C00000" };
    return styles.status;
  };

  return (
    <div style={styles.wrapper}>
      {/* Titel med gylden farve og fade-in */}
      <h2
        className={`fade-title ${animateTitle ? "animate" : ""}`}
        style={{
          color: "#C8A800",
          textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          fontSize: "3rem", // ændret størrelse
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        📁 Upload & Administrér Filer
      </h2>

      <div className={`fade-section ${animateSection ? "animate" : ""}`}>
        {/* Opret/Vælg mappe */}
        <div style={styles.section}>
          <h3>🗂️ Opret eller vælg mappe</h3>
          <div style={styles.folderControls}>
            <input
              type="text"
              placeholder="Ny mappe (fx 'ProjektA')"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              style={styles.input}
            />
            <button
              style={styles.button}
              onClick={() => {
                if (folderName && !availableFolders.includes(folderName)) {
                  setAvailableFolders([...availableFolders, folderName]);
                  setSelectedFolder(folderName);
                  setFolderName("");
                }
              }}
            >
              ➕ Opret mappe
            </button>
          </div>

          {availableFolders.length > 0 && (
            <div style={styles.folderList}>
              {availableFolders.map((folder) => (
                <button
                  key={folder}
                  style={selectedFolder === folder ? styles.activeFolder : styles.folderButton}
                  onClick={() => handleSelectFolder(folder)}
                >
                  📂 {folder}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Upload fil */}
        <div style={styles.section}>
          <h3>⬆️ Upload fil til valgt mappe</h3>
          <form onSubmit={handleUpload} style={styles.uploadForm}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={styles.fileInput}
            />
            <button type="submit" style={styles.button} disabled={uploading}>
              {uploading ? "Uploader..." : "Upload"}
            </button>
          </form>
          {status && <p style={getStatusStyle()}>{status}</p>}
        </div>

        {/* Uploadede filer */}
        {uploadedFiles.length > 0 && (
          <div style={styles.section}>
            <h3>📜 Filer i mappen: {selectedFolder}</h3>
            <ul style={styles.fileList}>
              {uploadedFiles.map((file, idx) => (
                <li key={idx}>
                  <a href={file.url} target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* --- CSS animation --- */}
      <style>{`
        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-title {
          opacity: 0;
          text-align: center;
        }

        .fade-title.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        .fade-section {
          opacity: 0;
        }

        .fade-section.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: 'url("/10.jpg") no-repeat center center / cover',
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    color: "#000",
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
    color: "#000",
    marginBottom: "20px",
  },
  folderControls: { display: "flex", gap: "10px", marginBottom: "10px" },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    color: "#000",
  },
  button: {
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  folderList: { display: "flex", flexWrap: "wrap", gap: "8px" },
  folderButton: {
    backgroundColor: "#eee",
    border: "none",
    borderRadius: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    color: "#000",
  },
  activeFolder: {
    backgroundColor: "#C8A800",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    padding: "6px 10px",
    cursor: "pointer",
  },
  uploadForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  fileInput: { cursor: "pointer", color: "#000" },
  status: { marginTop: "10px", fontWeight: "bold", color: "#000" },
  fileList: { marginTop: "10px", listStyle: "none", paddingLeft: 0, color: "#000" },
};
