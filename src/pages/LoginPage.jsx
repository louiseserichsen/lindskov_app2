import React, { useState } from "react";
import { auth } from "../firebase.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Login fejlede. Tjek dine oplysninger.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", margin: "8px 0", padding: "8px" }}
          />
        </div>
        <div>
          <label>Kodeord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", margin: "8px 0", padding: "8px" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ background: "#C8A800", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px" }}>
          Log ind
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
