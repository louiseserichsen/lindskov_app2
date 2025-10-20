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

  // Hent eksisterende mapper i Storage
  useEffect(() => {
    async function fetchFolders() {
      try {
        const user = auth.currentUser;
        if (!user) return;
        const rootRef = ref(storage, `userFolders/${user.uid}/`);
        const folderList = await listAll(rootRef);
        const folders = folderList.prefixes.map((folderRef) =>
          folderRef.name
        );
        setAvailableFolders(folders);
      } catch (err) {
        console.error("Kunne ikke hente mapper:", err);
      }
    }

    fetchFolders();
  }, []);

  // Håndtér upload
  const handleUpload = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      setStatus("❌ Du skal være logget ind for at uploade filer");
      return;
    }
    if (!file) {
      setStatus("❌ Vælg en fil først");
      return;
    }

    const targetFolder = selectedFolder || folderName;
    if (!targetFolder) {
      setStatus("❌ Indtast eller vælg en mappe først");
      return;
    }

    setUploading(true);
    const filePath = `userFolders/${user.uid}/${targetFolder}/${file.name}`;
    const storageRef = ref(storage, filePath);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setStatus(`✅ Filen "${file.name}" blev uploadet til mappen "${targetFolder}"`);
      setUploadedFiles((prev) => [...prev, { name: file.name, url: downloadURL }]);
      if (!availableFolders.includes(targetFolder)) {
        setAvailableFolders((prev) => [...prev, targetFolder]);
      }
      setFile(null);
      setFolderName("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload fejlede. Prøv igen.");
    } finally {
      setUploading(false);
    }
  };

  // Hent filer i valgt mappe
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

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>📁 Upload & administrér filer</h2>

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
                style={
                  selectedFolder === folder
                    ? styles.activeFolder
                    : styles.folderButton
                }
                onClick={() => handleSelectFolder(folder)}
              >
                📂 {folder}
              </button>
            ))}
          </div>
        )}
      </div>

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
        {status && <p style={styles.status}>{status}</p>}
      </div>

      {uploadedFiles.length > 0 && (
        <div style={styles.section}>
          <h3>📜 Filer i mappen: {selectedFolder}</h3>
          <ul style={styles.fileList}>
            {uploadedFiles.map((file, idx) => (
              <li key={idx}>
                <a href={file.url} target="_blank" rel="noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f7f7f7",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  title: { fontSize: "26px", fontWeight: "bold", color: "#333" },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
  },
  folderControls: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
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
  folderList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  folderButton: {
    backgroundColor: "#eee",
    border: "none",
    borderRadius: "6px",
    padding: "6px 10px",
    cursor: "pointer",
  },
  activeFolder: {
    backgroundColor: "#C8A800",
    color: "#fff",
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
  fileInput: { cursor: "pointer" },
  status: { marginTop: "10px", fontWeight: "bold" },
  fileList: { marginTop: "10px", listStyle: "none", paddingLeft: 0 },
};
