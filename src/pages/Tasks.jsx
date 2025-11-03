// src/pages/Tasks.jsx
import React, { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Referat fra sidste kundemøde", date: "01/11/2025" },
    { id: 2, title: "Planlægning af næste kampagne", date: "05/11/2025" },
    { id: 3, title: "Upload af nye billeder", date: "10/11/2025" },
    { id: 4, title: "Godkendelse af tekster", date: "15/11/2025" },
    { id: 5, title: "Design af ny forside", date: "20/11/2025" },
    { id: 6, title: "Opsætning af ny kontaktformular", date: "25/11/2025" },
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

  return (
    <div style={styles.pageWrapper}>
      <div className={`fade-card ${animateCard ? "animate" : ""}`} style={styles.card}>
        <h2
          className={`fade-title ${animateTitle ? "animate" : ""}`}
          style={styles.title}
        >
          Aftaler & Opgaver
        </h2>
        <p style={styles.description}>
          Her kan du se Lindskovs seneste referater og aftaler.
        </p>

        <div className="taskGrid" style={styles.taskGrid}>
          {tasks.map((task) => (
            <div key={task.id} style={styles.taskBox}>
              <h3 style={styles.taskTitle}>{task.title}</h3>
              <p style={styles.taskDate}>Dato: {task.date}</p>
              <button
                style={styles.taskButton}
                onClick={() => alert(`Åbner: ${task.title}`)}
              >
                Se referat
              </button>
            </div>
          ))}
        </div>

        <button style={styles.contractBtn} onClick={() => alert("Kontrakt åbnet!")}>
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

        /* Responsiv tilpasning */
        @media (max-width: 900px) {
          .taskGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .taskGrid {
            grid-template-columns: 1fr;
          }
        }
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
    maxWidth: "1000px",
    textAlign: "center",
  },
  title: {
    color: "#C8A800",
    textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "10px",
  },
  description: {
    marginBottom: "25px",
    color: "#333",
    fontSize: "1rem",
  },
  taskGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 🔹 tre bokse pr. række
    gap: "20px",
    marginBottom: "20px",
  },
  taskBox: {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  taskTitle: {
    color: "#000",
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  taskDate: {
    color: "#555",
    fontSize: "0.9rem",
    marginBottom: "15px",
  },
  taskButton: {
    padding: "8px 16px",
    backgroundColor: "#C8A800",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease",
  },
  contractBtn: {
    marginTop: "30px",
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
