import React, { useEffect, useState, useRef } from "react";
import { auth } from "../firebase";
import { updateProfile, onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [status, setStatus] = useState("");
  const [contactsVisible, setContactsVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.displayName) setDisplayName(currentUser.displayName);
    });
    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!displayName.trim()) {
      setStatus("❌ Indtast et navn før du gemmer.");
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName });
      setStatus("✅ Profil opdateret!");
      setIsEditing(false);
      setUser({ ...auth.currentUser });
    } catch (error) {
      console.error(error);
      setStatus("❌ Der opstod en fejl under opdatering.");
    }
  };

  const handleImageClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
    setStatus("✅ Billede valgt (ikke gemt online)");
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
            src={profileImage || "https://via.placeholder.com/100x100.png?text=Profil"}
            alt="Profil"
            style={styles.profileImage}
          />
          <p style={styles.changePhoto}>Klik for at ændre billede</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div style={styles.infoBlock}>
          <p style={styles.text}><strong>Email:</strong> {user.email}</p>
          <p style={styles.text}><strong>UID:</strong> {user.uid}</p>
          {isEditing ? (
            <>
              <input
                style={{ ...styles.input, color: "#000" }}
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Dit navn"
              />
              <div style={styles.btnRow}>
                <button style={styles.saveBtn} onClick={handleSave}>Gem</button>
                <button style={styles.cancelBtn} onClick={() => setIsEditing(false)}>Annuller</button>
              </div>
            </>
          ) : (
            <>
              <p style={styles.text}><strong>Navn:</strong> {user.displayName || "Ikke angivet"}</p>
              <button style={styles.editBtn} onClick={() => setIsEditing(true)}>Rediger profil</button>
            </>
          )}
        </div>

        {status && <p style={{ ...styles.status, color: "#000" }}>{status}</p>}

        <div style={styles.section}>
          <button style={styles.toggleBtn} onClick={() => setContactsVisible(!contactsVisible)}>
            {contactsVisible ? "Skjul kontakter" : "Vis gemte kontakter"}
          </button>
          {contactsVisible && (
            <ul style={styles.list}>
              {contacts.map((c, i) => (
                <li key={i} style={styles.listItem}>
                  <span style={styles.text}>
                    <strong>{c.name}</strong><br/>
                    📞 {c.phone}<br/>
                    ✉️ {c.email}
                  </span>
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
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...styles.socialLink, backgroundColor: link.color }}
                >
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
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    width: "100%",
    background: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
    overflowY: "auto",
    maxHeight: "95vh",
  },
  title: { color: "#C8A800", marginBottom: "25px" },
  imageWrapper: { cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" },
  profileImage: { width: "100px", height: "100px", borderRadius: "50%" },
  changePhoto: { fontSize: "12px", color: "#777", marginTop: "5px" },
  infoBlock: { marginBottom: "25px" },
  text: { color: "#000", margin: "5px 0" },
  input: { width: "80%", maxWidth: "300px", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", margin: "10px auto", display: "block" },
  btnRow: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" },
  saveBtn: { background: "#C8A800", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px" },
  cancelBtn: { background: "#777", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px" },
  editBtn: { background: "#C8A800", color: "#fff", border: "none", borderRadius: "6px", padding: "10px 16px", marginTop: "10px" },
  status: { marginTop: "10px", fontWeight: "bold" },
  section: { marginTop: "25px", textAlign: "center" },
  toggleBtn: { background: "#333", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px" },
  list: { listStyle: "none", padding: 0, margin: "10px auto", textAlign: "center" },
  listItem: { background: "#f2f2f2", borderRadius: "8px", padding: "12px", marginBottom: "8px" },
  socialContainer: { display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" },
  socialLink: { color: "#fff", textDecoration: "none", padding: "8px 10px", borderRadius: "6px" },
  loading: { textAlign: "center", marginTop: "50px", color: "#000" },
};
