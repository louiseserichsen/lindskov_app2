import React, { useEffect, useState, useRef } from "react";
import { auth } from "../firebase.jsx";
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
    <>
      {/* Reset margin/padding og sikre 100% højde */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>

      {/* Wrapper med fuld viewport og centering */}
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
                <button style={styles.saveBtn} onClick={handleSave}>Gem</button>
                <button style={styles.cancelBtn} onClick={() => setIsEditing(false)}>Annuller</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Navn:</strong> {user.displayName || "Ikke angivet"}</p>
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
    </>
  );
}

const styles = {
  pageWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f9f9f9, #e6e6e6)",
    boxSizing: "border-box",
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
