import React, { useState } from "react";
import { storage, db, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export default function UploadVideo() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file || !auth.currentUser) return;
    const storageRef = ref(storage, `videos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, "videos"), {
      url,
      userId: auth.currentUser.uid,
      name: file.name
    });
    alert("Video uploaded!");
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
