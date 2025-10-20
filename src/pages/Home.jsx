import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Velkommen til Lindskov App</h1>
      <p>Her kan du logge ind, uploade filer og få hjælp.</p>
      <Link to="/help" style={{
        background: "#C8A800",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold",
      }}>
        FAQ
      </Link>
    </div>
  );
}

export default Home;
