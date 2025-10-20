import React, { useState } from "react";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FilesPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [activeSender, setActiveSender] = useState("kunde1");
  const [activeReceiver, setActiveReceiver] = useState("kunde1");
  const [receivedFiles, setReceivedFiles] = useState([]);

  const customers = ["kunde1", "kunde2", "kunde3"];

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
        customer: activeSender,
      });

      setUploadStatus(`✅ Fil "${selectedFile.name}" uploaded!`);
      setReceivedFiles((prev) => [...prev, selectedFile.name]);
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      setUploadStatus("❌ Upload fejlede. Prøv igen.");
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>📂 Dine filer</h2>

        <div style={styles.uploadSection}>
          <input type="file" onChange={handleFileChange} style={styles.fileInput} />
          <button style={styles.uploadBtn} onClick={handleUpload}>Upload</button>
        </div>

        {uploadStatus && <p style={styles.status}>{uploadStatus}</p>}

        <div style={styles.row}>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Filer delt af dig</h3>
            <div style={styles.customerTabs}>
              {customers.map((cust) => (
                <button
                  key={cust}
                  onClick={() => setActiveSender(cust)}
                  style={activeSender === cust ? styles.activeTab : styles.tab}
                >
                  {cust.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={styles.filesList}>
              <p>Her vises filer du har delt til: <strong>{activeSender}</strong></p>
            </div>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Filer delt med dig</h3>
            <div style={styles.customerTabs}>
              {customers.map((cust) => (
                <button
                  key={cust}
                  onClick={() => setActiveReceiver(cust)}
                  style={activeReceiver === cust ? styles.activeTab : styles.tab}
                >
                  {cust.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={styles.filesList}>
              <p>Her vises filer delt med dig fra: <strong>{activeReceiver}</strong></p>
              <ul>
                {receivedFiles.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#f3f3f3",
    padding: "20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    width: "100%",
    maxWidth: "900px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
  },
  title: { fontSize: "28px", fontWeight: "bold", color: "#333" },
  uploadSection: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
  fileInput: { cursor: "pointer" },
  uploadBtn: {
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
  },
  status: { textAlign: "center", fontWeight: "bold" },
  box: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
  boxTitle: {
    fontSize: "20px",
    color: "#C8A800",
    marginBottom: "15px",
    borderBottom: "2px solid #C8A800",
    paddingBottom: "8px",
  },
  customerTabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  tab: {
    backgroundColor: "#eee",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
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
