import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateBox, setAnimateBox] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateTitle(true), 300);
    const timer2 = setTimeout(() => setAnimateBox(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="home-banner home-page">
      <div className={`home-content fade-box ${animateBox ? "animate" : ""}`}>
        <h1 className={`home-title fade-title ${animateTitle ? "animate" : ""}`}>
          Velkommen til Lindskovs kundeapp!
        </h1>
        <p className="home-text">
          Her kan du dele og modtage filer fra Lindskov, tilmelde dig arrangementer,
          se nyheder fra Lindskov og meget mere.
        </p>

        <div className="button-row">
          <Link to="/help" className="home-link">
            FAQ
          </Link>
          <Link to="/login" className="home-link login-btn">
            Login
          </Link>
        </div>

        {/* --- LinkedIn logo under knapperne --- */}
        <div className="footer-logo">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linked.png" alt="LinkedIn Logo" />
          </a>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; width: 100%; }
        body { font-family: Arial, sans-serif; overflow-x: hidden; }

        .home-banner {
          width: 100%;
          min-height: 100vh;
          background-image: url("/6.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding-top: 120px; /* mindre padding for at rykke indhold op */
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
        }

        .home-content {
          background: rgba(0, 0, 0, 0.6);
          padding: 30px 40px;
          border-radius: 12px;
          max-width: 700px;
          width: 90%;
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px; /* giver lidt afstand fra toppen */
        }

        .home-title {
          font-size: 3rem;
          margin-bottom: 20px;
          color: #C8A800;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
          opacity: 0;
        }

        .home-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #C8A800;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
          text-align: center;
        }

        .button-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .home-link {
          display: inline-block;
          background: #C8A800;
          color: #fff;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .home-link:hover {
          background: #b29500;
          transform: scale(1.05);
        }

        .login-btn {
          background: #444;
        }
        .login-btn:hover {
          background: #666;
        }

        /* Footer logo */
        .footer-logo {
          margin-top: 30px; /* afstand fra knapperne */
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .footer-logo img {
          width: 50px;
          height: 50px;
        }

        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-title.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        .fade-box.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        @media (max-width: 768px) {
          .home-banner { padding-top: 100px; }
          .home-content { padding: 20px 25px; }
          .home-title { font-size: 2rem; }
          .home-text { font-size: 1rem; }
          .home-link { padding: 10px 18px; }
        }

        @media (max-width: 480px) {
          .home-banner { padding-top: 80px; }
          .home-content { padding: 15px 20px; }
          .home-title { font-size: 1.8rem; }
          .home-text { font-size: 0.95rem; }
        }
      `}</style>
    </div>
  );
}

export default Home;
