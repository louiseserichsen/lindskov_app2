// src/pages/Tasks.jsx
import React, { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Årshjul 2025", progress: 80 },
    { id: 2, title: "Upload af dokumenter", progress: 50 },
    { id: 3, title: "Godkendelse af kontrakt", progress: 20 },
    { id: 4, title: "Content Plan", progress: 60 },
  ]);

  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTitle(true);
      setAnimateCard(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const progressBarStyle = (progress) => ({
    width: `${progress}%`,
    height: "100%",
    backgroundColor: "#C8A800",
    borderRadius: "8px",
    transition: "width 0.3s ease",
  });

  const progressContainerStyle = {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    height: "20px",
    marginBottom: "5px",
  };

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
            marginBottom: "10px",
          }}
        >
          Opgaver & Aftaler
        </h2>
        <p style={{ marginBottom: "25px", color: "#333", fontSize: "1rem" }}>
          Her kan du se hvor langt Lindskov er med de opgaver og aftaler i har indgået.
        </p>

        {tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "5px", color: "#000" }}>{task.title}</h3>
            <div style={progressContainerStyle}>
              <div style={progressBarStyle(task.progress)} />
            </div>
            <p style={{ margin: 0 }}>{task.progress}% færdig</p>
          </div>
        ))}

        {/* Knappen under indholdsboksen */}
        <button style={styles.contractBtn} onClick={() => alert("Kontrak åbnet!")}>
          Se kontrakt
        </button>
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
  pageWrapper: {
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    width: "100%",
    background: 'url("/13.jpg") no-repeat center center / cover',
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },
  contractBtn: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};
