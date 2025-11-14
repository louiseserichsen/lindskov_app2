import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "var(--background-color)"
    },
    topBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "var(--primary-color)"
    },
    menuIcon: {
      width: "30px",
      height: "30px",
      cursor: "pointer"
    },
    dropdown: {
      position: "absolute",
      top: "60px",
      right: "20px",
      backgroundColor: "var(--card-background)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      display: dropdownOpen ? "block" : "none",
      zIndex: 1000
    },
    linkStyle: {
      display: "block",
      padding: "12px 20px",
      textDecoration: "none",
      color: "var(--text-color)",
      fontSize: "16px",
      borderBottom: "1px solid var(--border-color)"
    },
    eventCard: {
      backgroundColor: "var(--card-background)",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      marginBottom: "15px"
    },
    eventTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "5px"
    },
    eventDate: {
      fontSize: "14px",
      opacity: 0.7
    }
  };

  // Demo events
  const events = [
    { id: 1, title: "Lektier", date: "12. April 2025" },
    { id: 2, title: "Møde med teamet", date: "15. April 2025" },
    { id: 3, title: "Biblioteksarbejde", date: "20. April 2025" }
  ];

  return (
    <div style={styles.container}>
      {/* Top Menu Bar */}
      <div style={styles.topBar}>
        <h2 style={styles.title}>Events</h2>
        <img
          src="/menu.svg"
          alt="Menu"
          style={styles.menuIcon}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      </div>

      {/* Dropdown Menu */}
      <div style={styles.dropdown}>
        <Link to="/" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>
          Forside
        </Link>

        <Link to="/events" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>
          Events
        </Link>

        <Link to="/tasks" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>
          Aftaler & Opgaver
        </Link>

        <Link to="/profile" style={styles.linkStyle} onClick={() => setDropdownOpen(false)}>
          Profil
        </Link>
      </div>

      {/* Events List */}
      {events.map((event) => (
        <div key={event.id} style={styles.eventCard}>
          <div style={styles.eventTitle}>{event.title}</div>
          <div style={styles.eventDate}>{event.date}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
