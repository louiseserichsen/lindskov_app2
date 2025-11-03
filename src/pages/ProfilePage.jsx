import React, { useEffect, useState, useRef } from "react";
import { auth } from "../firebase";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore();

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [status, setStatus] = useState("");
  const [contactsVisible, setContactsVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });

  const fileInputRef = useRef(null);

  // --- Hent bruger og kontakter fra Firestore ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser?.displayName) setDisplayName(currentUser.displayName);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setContacts(data.contacts || []);
        } else {
          // Opret dokument med tom kontaktliste, hvis ikke eksisterer
          await setDoc(docRef, { contacts: [] });
          setContacts([]);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // --- Animation ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTitle(true);
      setAnimateCard(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // --- Gem profilnavn ---
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

  // --- Håndter profilbillede ---
  const handleImageClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
    setStatus("✅ Billede valgt (ikke gemt online)");
  };

  // --- Tilføj kontakt ---
  const handleAddContact = async () => {
    if (!newContact.name.trim() || !newContact.email.trim() || !newContact.phone.trim()) {
      setStatus("❌ Udfyld alle felter for kontakten.");
      return;
    }
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setNewContact({ name: "", email: "", phone: "" });
    setStatus("✅ Kontakt tilføjet!");

    await setDoc(doc(db, "users", user.uid), { contacts: updatedContacts }, { merge: true });
  };

  // --- Slet kontakt ---
  const handleDeleteContact = async (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    setStatus("✅ Kontakt slettet!");

    await setDoc(doc(db, "users", user.uid), { contacts: updatedContacts }, { merge: true });
  };

  const socialLinks = [
    { platform: "Facebook", url: "https://facebook.com", color: "#1877F2" },
    { platform: "Instagram", url: "https://instagram.com", color: "#E4405F" },
    { platform: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
  ];

  if (!user) return <p style={styles.loading}>Indlæser bruger...</p>;

  return (
    <div style={styles.pageWrapper}>
      <div className={`fade-card ${animateCard ? "animate" : ""}`} style={styles.card}>
        <h2
          className={`fade-title ${animateTitle ? "animate" : ""}`}
          style={{
            color: "#C8A800",
            textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          👤 Din profil
        </h2>

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

        {/* --- Kontakter --- */}
        <div style={styles.section}>
          <button style={styles.toggleBtn} onClick={() => setContactsVisible(!contactsVisible)}>
            {contactsVisible ? "Skjul kontakter" : "Vis gemte kontakter"}
          </button>
          {contactsVisible && (
            <div style={{ marginTop: "15px" }}>
              <ul style={styles.list}>
                {contacts.map((c, i) => (
                  <li key={i} style={{ ...styles.listItem, color: "#000" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <strong>{c.name}</strong><br/>
                        📞 {c.phone}<br/>
                        ✉️ {c.email}
                      </div>
                      <button
                        style={styles.deleteBtn}
                        onClick={() => handleDeleteContact(i)}
                      >
                        ✖
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "15px" }}>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Navn"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                />
                <input
                  style={styles.input}
                  type="email"
                  placeholder="Email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                />
                <input
                  style={styles.input}
                  type="tel"
                  placeholder="Telefonnummer"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
                <button style={{ ...styles.saveBtn, marginTop: "10px" }} onClick={handleAddContact}>
                  Tilføj kontakt
                </button>
              </div>
            </div>
          )}
        </div>

        {/* --- Social links --- */}
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

      <style>{`
        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-title { opacity: 0; }
        .fade-title.animate { opacity: 1; animation: fadeSlideDown 1s ease forwards; }
        .fade-card { opacity: 0; transform: translateY(20px); }
        .fade-card.animate { opacity: 1; transform: translateY(0); animation: fadeSlideDown 1s ease forwards; }
      `}</style>
    </div>
  );
}

const styles = {
  pageWrapper: { display: "grid", placeItems: "center", minHeight: "100vh", width: "100%", background: 'url("/5.jpg") no-repeat center center / cover', padding: "20px", boxSizing: "border-box" },
  card: { background: "#fff", padding: "40px 30px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%", maxWidth: "500px", textAlign: "center", overflowY: "auto", maxHeight: "95vh" },
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
  deleteBtn: { background: "transparent", border: "none", color: "#ff4d4d", fontSize: "16px", cursor: "pointer" },
  status: { marginTop: "10px", fontWeight: "bold" },
  section: { marginTop: "25px", textAlign: "center" },
  toggleBtn: { background: "#333", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px" },
  list: { listStyle: "none", padding: 0, margin: "10px auto", textAlign: "center" },
  listItem: { background: "#f2f2f2", borderRadius: "8px", padding: "12px", marginBottom: "8px", color: "#000" },
  socialContainer: { display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" },
  socialLink: { color: "#fff", textDecoration: "none", padding: "8px 10px", borderRadius: "6px" },
  loading: { textAlign: "center", marginTop: "50px", color: "#000" },
};