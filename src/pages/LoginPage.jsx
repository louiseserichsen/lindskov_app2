// src/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { auth } from "../firebase.jsx";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false); // Skifter mellem login og registrering
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isRegister) {
        // Opret ny bruger
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/profile");
      } else {
        // Log ind
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/profile");
      }
    } catch (err) {
      console.error(err);
      setError("Noget gik galt: " + err.message);
    }
  };

  // Sæt baggrund
  useEffect(() => {
    document.body.style.backgroundColor = "#333";
    document.documentElement.style.backgroundColor = "#333";
    document.body.style.margin = "0";
    document.documentElement.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  const wrapperStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    padding: "20px",
    boxSizing: "border-box",
  };

  const formStyle = {
    backgroundColor: "#222",
    padding: "30px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    width: "100%",
    textAlign: "center",
    color: "#fff",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#C8A800",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const toggleStyle = {
    marginTop: "15px",
    fontSize: "14px",
    color: "#C8A800",
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  };

  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          form {
            padding: 20px 15px !important;
          }
        }
      `}</style>

      <div style={wrapperStyle}>
        <form onSubmit={handleLogin} style={formStyle}>
          <h2>{isRegister ? "Opret ny bruger" : "Login"}</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            {isRegister ? "Opret bruger" : "Login"}
          </button>

          {error && <p style={errorStyle}>{error}</p>}

          <button
            type="button"
            style={toggleStyle}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Har du allerede en konto? Log ind" : "Opret ny bruger"}
          </button>
        </form>
      </div>
    </>
  );
}
