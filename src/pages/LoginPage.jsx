import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.jsx";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateTitle(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="login-banner">
      <div className="login-content">
        <h2 className={`fade-title ${animateTitle ? "animate" : ""}`}>
          Login eller opret bruger
        </h2>

        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Kodeord:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {message && <p className="message">{message}</p>}

          <div className="btn-row">
            <button type="submit" className="login-btn">Log ind</button>
            <button type="button" onClick={handleSignup} className="signup-btn">
              Opret bruger
            </button>
            <Link to="/password-reset" className="signup-btn">
              Har du glemt din adgangskode?
            </Link>
          </div>

          {/* FAQ og LinkedIn ved siden af hinanden */}
          <div className="logo-wrapper">
            <Link to="/help" className="faq-btn">FAQ</Link>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linked.png" alt="LinkedIn Logo" />
            </a>
          </div>
        </form>
      </div>

      <style>{`
        html, body { height: 100%; width: 100%; margin: 0; padding: 0; overflow-x: hidden; }
        .login-banner {
          width: 100%;
          min-height: 100vh;
          background-image: url("/12.jpg");
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 120px;
          position: relative;
        }
        .login-content {
          background: rgba(0,0,0,0.6);
          padding: 30px 40px;
          border-radius: 12px;
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 20px;
        }
        .fade-title {
          font-size: 3rem;
          color: #C8A800;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.8);
          opacity: 0;
          margin-bottom: 20px;
          width: 100%;
          text-align: center;
        }
        .fade-title.animate {
          animation: fadeSlideDown 1s ease forwards;
        }
        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .login-form { display: flex; flex-direction: column; gap: 12px; width: 100%; }
        .login-form input { width: 100%; padding: 10px; border-radius: 5px; border: none; margin-top: 5px; }
        .btn-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .login-btn, .signup-btn {
          padding: 10px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          color: #fff;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .login-btn { background: #C8A800; }
        .signup-btn { background: #444; }
        .login-btn:hover { background: #b29500; }
        .signup-btn:hover { background: #555; }
        .error { color: red; }
        .message { color: lightgreen; }
        .logo-wrapper {
          margin-top: 25px;
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
        }
        .logo-wrapper img { width: 50px; height: 50px; }
        .faq-btn {
          padding: 10px 20px;
          border-radius: 6px;
          background: #444;
          color: #fff;
          font-weight: bold;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .faq-btn:hover { background: #555; }
        @media (max-width: 768px) { .login-banner { padding-top: 100px; } .fade-title { font-size: 2.2rem; } }
        @media (max-width: 480px) { .login-banner { padding-top: 80px; } .fade-title { font-size: 1.8rem; } .btn-row { flex-direction: column; gap: 8px; } .logo-wrapper { flex-direction: column; gap: 10px; } }
      `}</style>
    </div>
  );
}

export default LoginPage;
