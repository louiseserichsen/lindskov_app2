import React, { useEffect, useState, useRef } from "react";
import { auth, db, storage } from "../firebase";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [status, setStatus] = useState("");
  const [contactsVisible, setContactsVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
          if (docSnap.data().profileUrl) setProfileUrl(docSnap.data().profileUrl);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSaveName = async () => {
    if (!displayName.trim()) {
      setStatus("❌ Indtast et navn før du gemmer.");
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName });
      setStatus("✅ Profil opdateret!");
      setIsEditing(false);
      setUser({ ...auth.currentUser });
      await setDoc(doc(db, "users", auth.currentUser.uid), { name: displayName }, { merge: true });
    } catch (error) {
      console.error(error);
      setStatus("❌ Der opstod en fejl under opdatering.");
    }
  };

  const handleImageClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file || !user) return;
    const storageRef = ref(storage, `profile/${user.uid}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setProfileUrl(url);
    await setDoc(doc(db, "users", user.uid), { profileUrl: url }, { merge: true });
    setStatus("✅ Profilbillede opdateret!");
  };

  const contacts = [
    { name: "Mickey Mouse", phone: "01 23 45 67", email: "mickey@disney.com" },
    { name: "Minni Mouse", phone: "89 01 23 45", email: "minni@disney.com" },
    { name: "Anders And", phone: "12 34 56 78", email: "anders@lindskov.dk" },
  ];

  const socialLinks = [
    { platform: "Facebook", url: "https://facebook.com", color: "#1877F2" },
    { platform: "Instagram", url: "https://instagram.com", color: "#E4405F" },
    { platform: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
  ];

  if (!user) return <p style={styles.loading}>Indlæser bruger...</p>;

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 Din profil</h2>

        <div style={styles.imageWrapper} onClick={handleImageClick}>
          <img
            src={profileUrl || "https://via.placeholder.com/110x110.png?text=Profil"}
            alt="Profil"
            style={styles.profileImage}
          />
          <p style={styles.changePhoto}>Klik for at ændre billede</p>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
          {file && <button style={styles.uploadBtn} onClick={handleUpload}>Upload nyt billede</button>}
        </div>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>UID:</strong> {user.uid}</p>

        {isEditing ? (
          <>
            <input
              style={styles.input}
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Dit navn"
            />
            <div style={styles.btnRow}>
              <button style={styles.saveBtn} onClick={handleSaveName}>Gem</button>
              <button style={styles.cancelBtn} onClick={() => setIsEditing(false)}>Annuller</button>
            </div>
          </>
        ) : (
          <>
            <p><strong>Navn:</strong> {user.displayName || userData?.name || "Ikke angivet"}</p>
            <button style={styles.editBtn} onClick={() => setIsEditing(true)}>Rediger profil</button>
          </>
        )}

        {status && <p style={styles.status}>{status}</p>}

        <div style={styles.section}>
          <button style={styles.toggleBtn} onClick={() => setContactsVisible(!contactsVisible)}>
            {contactsVisible ? "Skjul kontakter" : "Vis gemte kontakter"}
          </button>
          {contactsVisible && (
            <ul style={styles.list}>
              {contacts.map((c, i) => (
                <li key={i} style={styles.listItem}>
                  <strong>{c.name}</strong><br/>
                  📞 {c.phone}<br/>
                  ✉️ {c.email}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={styles.section}>
          <button style={styles.toggleBtn} onClick={() => setSocialVisible(!socialVisible)}>
            {socialVisible ? "Skjul SoMe-links" : "Vis SoMe-links"}
          </button>
          {socialVisible && (
            <div style={styles.socialContainer}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, backgroundColor: link.color }}>
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "20px",
    background: 'url("/13.jpg") no-repeat center center / cover', // <-- baggrundsbilledet
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "40px 30px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "480px",
    textAlign: "center",
    boxSizing: "border-box",
  },
  title: { color: "#c9a700ff", fontSize: "26px", marginBottom: "20px" },
  imageWrapper: { textAlign: "center", marginBottom: "20px", cursor: "pointer" },
  profileImage: { width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "2px solid #C8A800" },
  changePhoto: { color: "#777", fontSize: "12px", marginTop: "5px" },
  uploadBtn: { marginTop: "10px", padding: "6px 12px", borderRadius: "8px", border: "none", backgroundColor: "#C8A800", color: "#fff", cursor: "pointer" },
  input: { padding: "10px", width: "100%", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "15px" },
  btnRow: { display: "flex", justifyContent: "center", gap: "10px" },
  saveBtn: { backgroundColor: "#aa8e00ff", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 14px", cursor: "pointer" },
  cancelBtn: { backgroundColor: "#777", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 14px", cursor: "pointer" },
  editBtn: { backgroundColor: "#C8A800", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 16px", cursor: "pointer", marginTop: "10px" },
  status: { marginTop: "15px", fontWeight: "bold" },
  section: { marginTop: "25px" },
  toggleBtn: { backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 12px", cursor: "pointer", fontSize: "14px" },
  list: { marginTop: "15px", listStyle: "none", padding: 0 },
  listItem: { background: "#f2f2f2", borderRadius: "8px", padding: "10px", marginBottom: "10px", textAlign: "left" },
  socialContainer: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px", flexWrap: "wrap" },
  socialLink: { color: "#fff", textDecoration: "none", padding: "8px 12px", borderRadius: "6px", fontWeight: "bold", fontSize: "14px" },
  loading: { textAlign: "center", marginTop: "50px", color: "#666" },
};
