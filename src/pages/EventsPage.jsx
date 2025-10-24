import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link, Navigate } from "react-router-dom";

export default function EventsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [events, setEvents] = useState([
    { id: 1, title: "Networking Event", date: "2025-11-25", joined: false },
    { id: 2, title: "Workshop: Marketing", date: "2025-12-05", joined: true },
    { id: 3, title: "Tech Conference", date: "2025-12-15", joined: false },
  ]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setDropdownOpen(false);
  };

  const toggleJoin = (id) => {
    setEvents(events.map(e => e.id === id ? { ...e, joined: !e.joined } : e));
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <nav style={styles.navStyle}>
        <img src={`${import.meta.env.BASE_URL}lindskovlogo.png`} alt="Logo" style={styles.logoStyle} />
        <button style={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>Menu ▾</button>

        {dropdownOpen && (
          <div style={styles.dropdownStyle}>
            <Link to="/" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>Home</Link>
            <Link to="/profile" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>Profil</Link>
            <Link to="/upload" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>Filer</Link>
            <Link to="/files" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>Delte filer</Link>
            <Link to="/help" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>FAQ</Link>
            <Link to="/events" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>Tilmelding</Link>
            <button style={styles.logoutBtn} onClick={handleLogout}>Log ud</button>
          </div>
        )}
      </nav>

      <div style={styles.pageWrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>📅 Kommende events</h2>
          <ul style={styles.list}>
            {events.map(event => (
              <li key={event.id} style={styles.listItem}>
                <div style={styles.eventInfo}>
                  <strong>{event.title}</strong><br />
                  <span>{event.date}</span>
                </div>
                <button
                  style={event.joined ? styles.joinedBtn : styles.joinBtn}
                  onClick={() => toggleJoin(event.id)}
                >
                  {event.joined ? "Tilmeldt" : "Tilmeld"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const styles = {
  navStyle: { 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    padding: "10px 20px", 
    backgroundColor: "#000", 
    position: "fixed", 
    top: 0, 
    width: "100%", 
    zIndex: 1000, 
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)" 
  },
  logoStyle: { height: "50px", width: "auto", marginRight: "30px", borderRadius: "8px" },
  dropdownButton: { backgroundColor: "#C8A800", color: "#fff", border: "none", borderRadius: 4, padding: "8px 14px", cursor: "pointer", fontWeight: "bold" },
  dropdownStyle: { position: "absolute", left: 120, top: 55, backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: 6, boxShadow: "0 2px 8px rgba(0,0,0,0.2)", zIndex: 1000, padding: 10, display: "flex", flexDirection: "column" },
  linkStyle: { color: "#C8A800", textDecoration: "none", margin: "6px 0", fontWeight: "bold" },
  logoutBtn: { display: "block", background: "none", border: "none", padding: 8, width: "100%", textAlign: "left", color: "#C8A800", cursor: "pointer", fontWeight: "bold" },

  pageWrapper: { 
    display: "grid", 
    placeItems: "center", 
    minHeight: "100vh", 
    width: "100%", 
    background: 'url("/8.jpg") no-repeat center center / cover', // 🔹 Ny baggrund
    paddingTop: "80px", 
    boxSizing: "border-box" 
  },

  card: { background: "#fff", padding: "40px 30px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%", maxWidth: "500px", textAlign: "center" },
  title: { color: "#C8A800", marginBottom: "25px" },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 15px", marginBottom: "10px", backgroundColor: "#f2f2f2", borderRadius: "8px" },
  eventInfo: { textAlign: "left", color: "#000" },
  joinBtn: { backgroundColor: "#C8A800", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px", cursor: "pointer" },
  joinedBtn: { backgroundColor: "#777", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 12px", cursor: "pointer" },
};
