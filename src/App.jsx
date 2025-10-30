// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { auth } from "./firebase.jsx";

// Pages
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PasswordResetPage from "./pages/PasswordReset.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import FilesPage from "./pages/FilesPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import Nyheder from "./pages/Nyheder.jsx";
import Tasks from "./pages/Tasks.jsx"; // 👈 Tasks import

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [animateDropdown, setAnimateDropdown] = useState(false);

  useEffect(() => {
    document.title = "Lindskov App";
  }, []);

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

  if (loading) return <p>Loading...</p>;

  // --- Styles ---
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px 20px",
    backgroundColor: "#000",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  };

  const logoStyle = { height: "50px", width: "auto", marginRight: "30px", borderRadius: "8px" };
  const dropdownButton = {
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "8px 14px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const dropdownStyle = {
    position: "absolute",
    left: 120,
    top: 55,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: 6,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    minHeight: user ? "250px" : "auto",
    opacity: animateDropdown ? 1 : 0,
    transform: animateDropdown ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  const linksContainerStyle = { display: "flex", flexDirection: "column", flexGrow: user ? 1 : 0 };
  const linkStyle = { color: "#C8A800", textDecoration: "none", margin: "6px 0", fontWeight: "bold" };
  const logoutBtn = {
    display: "block",
    background: "none",
    border: "none",
    padding: 8,
    width: "100%",
    textAlign: "left",
    color: "#C8A800",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "auto",
  };
  const contentStyle = { paddingTop: "80px" };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setAnimateDropdown(false);
    setTimeout(() => setAnimateDropdown(true), 10);
  };

  return (
    <Router>
      <nav style={navStyle}>
        <img src={`${import.meta.env.BASE_URL}lindskovlogo.png`} alt="Lindskov Logo" style={logoStyle} />
        <button style={dropdownButton} onClick={toggleDropdown}>Menu ▾</button>

        {dropdownOpen && (
          <div style={dropdownStyle}>
            <div style={linksContainerStyle}>
              {!user && (
                <>
                  <Link to="/" style={linkStyle} onClick={() => setDropdownOpen(false)}>Hjem</Link>
                  <Link to="/login" style={linkStyle} onClick={() => setDropdownOpen(false)}>Login</Link>
                </>
              )}

              {user && (
                <>
                  <Link to="/nyheder" style={linkStyle} onClick={() => setDropdownOpen(false)}>Nyheder</Link>
                  <Link to="/profile" style={linkStyle} onClick={() => setDropdownOpen(false)}>Profil</Link>
                  <Link to="/upload" style={linkStyle} onClick={() => setDropdownOpen(false)}>Filer</Link>
                  <Link to="/files" style={linkStyle} onClick={() => setDropdownOpen(false)}>Delte filer</Link>
                  <Link to="/events" style={linkStyle} onClick={() => setDropdownOpen(false)}>Begivenheder</Link>
                  <Link to="/tasks" style={linkStyle} onClick={() => setDropdownOpen(false)}>Opgaver</Link> {/* 👈 Tasks link */}
                  <Link to="/help" style={linkStyle} onClick={() => setDropdownOpen(false)}>FAQ</Link>
                </>
              )}
            </div>

            {user && <button style={logoutBtn} onClick={handleLogout}>Log ud</button>}
          </div>
        )}
      </nav>

      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/nyheder" /> : <Home />} />
          <Route path="/login" element={user ? <Navigate to="/nyheder" /> : <LoginPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/nyheder" element={user ? <Nyheder /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/upload" element={user ? <UploadPage /> : <Navigate to="/login" />} />
          <Route path="/files" element={user ? <FilesPage /> : <Navigate to="/login" />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/events" element={user ? <EventsPage /> : <Navigate to="/login" />} />
          <Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/login" />} /> {/* 👈 Tasks route */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
