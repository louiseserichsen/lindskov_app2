import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FilesPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [sentFiles, setSentFiles] = useState([]);
  const [receivedFiles, setReceivedFiles] = useState([]);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const [showLindskovSent, setShowLindskovSent] = useState(false);
  const [showLindskovReceived, setShowLindskovReceived] = useState(false);

  const customerName = "Lindskov";

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateTitle(true), 300);
    const timer2 = setTimeout(() => setAnimateContent(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus(`✅ "${e.target.files[0].name}" valgt`);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("❌ Vælg en fil før upload");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setUploadStatus("❌ Du skal være logget ind for at uploade filer");
      return;
    }

    try {
      const storageRef = ref(storage, `userFiles/${user.uid}/${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "files"), {
        uid: user.uid,
        fileName: selectedFile.name,
        fileURL: downloadURL,
        createdAt: serverTimestamp(),
        customer: customerName,
      });

      setUploadStatus(`✅ Fil "${selectedFile.name}" uploaded!`);
      setSentFiles((prev) => [...prev, { name: selectedFile.name, customer: customerName }]);
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      setUploadStatus("❌ Upload fejlede. Prøv igen.");
    }
  };

  const getStatusStyle = (text) => {
    if (text.includes("❌ Vælg en fil før upload")) return { ...styles.status, color: "black" };
    if (text.includes("❌")) return { ...styles.status, color: "red" };
    if (text.includes("✅")) return { ...styles.status, color: "green" };
    return styles.status;
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.wrapper}>
        <h2 className={`fade-title ${animateTitle ? "animate" : ""}`}>Delte filer</h2>

        <div className={`fade-content ${animateContent ? "animate" : ""}`} style={{ width: "100%" }}>
          {/* Upload sektion */}
          <div style={styles.uploadWrapper}>
            <div style={styles.uploadRow}>
              <label style={styles.uploadBtn}>
                Vælg fil
                <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
              </label>
              <button style={styles.uploadBtn} onClick={handleUpload}>
                Upload
              </button>
            </div>
            {uploadStatus && <p style={getStatusStyle(uploadStatus)}>{uploadStatus}</p>}
          </div>

          {/* To bokse – flex-row på desktop, stacked på mobil */}
          <div className="file-boxes-row">
            {/* FILER DELT AF DIG */}
            <div className="file-box">
              <h3 style={styles.boxTitle}>Filer delt af dig</h3>
              <div style={styles.customerTabs}>
                <button
                  style={{
                    ...styles.activeTab,
                    backgroundColor: showLindskovSent ? "#C8A800" : "#aaa",
                  }}
                  onClick={() => setShowLindskovSent(!showLindskovSent)}
                >
                  {customerName.toUpperCase()}
                </button>
              </div>

              {showLindskovSent && (
                <div style={styles.filesList}>
                  <p style={styles.goldText}>
                    Her vises filer du har delt til: <strong>{customerName}</strong>
                  </p>
                  <ul>
                    {sentFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* FILER DELT MED DIG */}
            <div className="file-box">
              <h3 style={styles.boxTitle}>Filer delt med dig</h3>
              <div style={styles.customerTabs}>
                <button
                  style={{
                    ...styles.activeTab,
                    backgroundColor: showLindskovReceived ? "#C8A800" : "#aaa",
                  }}
                  onClick={() => setShowLindskovReceived(!showLindskovReceived)}
                >
                  {customerName.toUpperCase()}
                </button>
              </div>

              {showLindskovReceived && (
                <div style={styles.filesList}>
                  <p style={styles.goldText}>
                    Her vises filer delt med dig fra: <strong>{customerName}</strong>
                  </p>
                  <ul>
                    {receivedFiles.map((file, index) => (
                      <li key={index}>{file}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-title {
            font-size: 3rem;
            font-weight: bold;
            color: #C8A800;
            opacity: 0;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
            text-align: center;
            margin-bottom: 25px;
          }

          .fade-title.animate {
            opacity: 1;
            animation: fadeSlideDown 1s ease forwards;
          }

          .fade-content {
            opacity: 0;
          }

          .fade-content.animate {
            opacity: 1;
            animation: fadeSlideDown 1s ease forwards;
          }

          /* 💡 Flex row for desktop, stacked on mobile */
          .file-boxes-row {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            flex-wrap: wrap;
          }

          .file-box {
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px; /* desktop */
          }

          @media (max-width: 768px) {
            .file-boxes-row {
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }

            .file-box {
              width: 90%; /* fylder næsten hele skærmen */
            }
          }
        `}</style>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: 'url("/11.jpg") no-repeat center center / cover',
    padding: "20px",
    marginTop: 0,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    width: "100%",
    maxWidth: "900px",
    marginTop: "60px",
  },
  uploadWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
    gap: "10px",
  },
  uploadRow: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  status: { textAlign: "center", fontWeight: "bold" },
  goldText: { color: "#C8A800", fontWeight: "bold", textAlign: "center" },
  boxTitle: {
    fontSize: "20px",
    color: "#C8A800",
    marginBottom: "15px",
    borderBottom: "2px solid #C8A800",
    paddingBottom: "8px",
  },
  customerTabs: { display: "flex", justifyContent: "center", marginBottom: "10px" },
  activeTab: {
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  filesList: { textAlign: "center" },
};
