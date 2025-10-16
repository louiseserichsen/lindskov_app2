// src/pages/UploadPage.jsx
import React, { useState } from "react";
import { storage } from "../firebase.jsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `uploads/${file.name}`);
    
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUrl(downloadURL);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Video/Filer</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploader..." : "Upload"}
        </button>
      </form>
      {url && (
        <p>
          Fil uploadet! <a href={url} target="_blank">Se fil</a>
        </p>
      )}
    </div>
  );
}
