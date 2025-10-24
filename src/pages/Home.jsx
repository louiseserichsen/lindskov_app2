// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-banner home-page">
      <div className="home-content">
        <h1 className="home-title">Velkommen til Lindskov App</h1>
        <p className="home-text">
          Her kan du dele og modtage filer fra Lindskov, tilmelde dig arrangementer,
          se nyheder fra Lindskov og meget mere.
        </p>
        <Link to="/help" className="home-link">
          FAQ
        </Link>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
        }

        #root.home-page {
          padding: 0;
          max-width: 100%;
        }

        body {
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

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
          padding-top: 580px; /* 🔹 Rykket 20px op fra 600px */
          padding-left: 20px;
          padding-right: 20px;
        }

        .home-content {
          background: rgba(0, 0, 0, 0.6);
          padding: 30px 40px;
          border-radius: 12px;
          max-width: 700px;
          width: 90%;
        }

        .home-title {
          font-size: 3rem;
          margin-bottom: 20px;
          color: #C8A800;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
        }

        .home-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #C8A800;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
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
          margin-top: 50px; 
        }

        .home-link:hover {
          background: #b29500;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .home-banner {
            padding-top: 460px; /* 🔹 Rykket 20px op fra 480px */
          }
          .home-content {
            padding: 20px 25px;
          }
          .home-title {
            font-size: 2rem;
          }
          .home-text {
            font-size: 1rem;
          }
          .home-link {
            padding: 10px 18px;
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .home-banner {
            padding-top: 380px; /* 🔹 Rykket 20px op fra 400px */
          }
          .home-content {
            padding: 15px 20px;
          }
          .home-title {
            font-size: 1.8rem;
          }
          .home-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
