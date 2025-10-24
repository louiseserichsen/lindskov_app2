// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { auth } from "../firebase.jsx";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // --- LOGIN ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Du er nu logget ind!");
    } catch (err) {
      setError("❌ Login fejlede. Tjek dine oplysninger.");
    }
  };

  // --- OPRET BRUGER ---
  const handleSignup = async () => {
    setError("");
    setMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Bruger oprettet succesfuldt!");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("❌ Denne e-mail er allerede registreret.");
      } else if (err.code === "auth/weak-password") {
        setError("❌ Adgangskoden skal være mindst 6 tegn.");
      } else {
        setError("❌ Noget gik galt. Prøv igen.");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ color: "#C8A800", marginBottom: "20px" }}>
        Login eller opret bruger
      </h2>

      <form
        onSubmit={handleLogin}
        style={{
          display: "inline-block",
          textAlign: "left",
          backgroundColor: "rgba(34, 34, 34, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          color: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              display: "block",
              margin: "8px 0",
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>

        <div>
          <label>Kodeord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              display: "block",
              margin: "8px 0 16px 0",
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>

        {/* FEJL OG BESKEDER */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "lightgreen" }}>{message}</p>}

        {/* KNAPPER */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              background: "#C8A800",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Log ind
          </button>

          <button
            type="button"
            onClick={handleSignup}
            style={{
              background: "#444",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Opret bruger
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
