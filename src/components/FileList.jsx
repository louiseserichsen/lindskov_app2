import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      setFiles(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchFiles();
  }, []);

  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          <p>{file.name}</p>
          <video src={file.url} controls width="300" />
        </div>
      ))}
    </div>
  );
}
