import React, { useState } from "react";
import { auth } from "../firebase.jsx";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Tjek din e-mail for instruktioner.");
    } catch (err) {
      setError("❌ Noget gik galt. Tjek e-mailen og prøv igen.");
    }
  };

  return (
    <div className="reset-banner">
      <div className="reset-content">
        <h2>Nulstil Adgangskode</h2>
        <form onSubmit={handleReset} className="reset-form">
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {message && <p className="message">{message}</p>}
          <button type="submit">Send e-mail</button>
        </form>
        <Link to="/login" className="back-login">Tilbage til login</Link>
      </div>

      <style>{`
        .reset-banner { width: 100%; min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #111; padding: 20px; }
        .reset-content { background: rgba(0,0,0,0.6); padding: 30px 40px; border-radius: 12px; text-align: center; max-width: 400px; width: 100%; }
        .reset-form { display: flex; flex-direction: column; gap: 12px; margin-top: 15px; }
        .reset-form input { padding: 10px; border-radius: 5px; border: none; width: 100%; }
        .reset-form button { padding: 10px 20px; border-radius: 6px; border: none; background: #C8A800; color: #fff; font-weight: bold; cursor: pointer; }
        .reset-form button:hover { background: #b29500; }
        .error { color: red; margin-top: 10px; }
        .message { color: lightgreen; margin-top: 10px; }
        .back-login { display: block; margin-top: 20px; color: #C8A800; text-decoration: none; }
        .back-login:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}
