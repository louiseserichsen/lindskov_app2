// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <>
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

        body {
          font-family: Arial, sans-serif;
          background-color: #111;
          color: #fff;
          overflow-x: hidden;
        }

        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-height: 100vh;
        }

        .home-banner {
          width: 100%;
          min-height: 100vh;
          background: url("/lindskov3.jpg") no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 4rem;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          padding-top: 0;
        }

        .home-content {
          background-color: #222;
          border-radius: 12px;
          padding: 30px;
          max-width: 800px;
          width: 90%;
          text-align: left;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          font-size: 20px;
          line-height: 1.6;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .home-content p {
          margin: 0 0 20px 0;
          text-align: left;
        }

        .help-button {
          display: inline-block;
          text-decoration: none;
          padding: 12px 25px;
          background-color: #c9a700ff;
          border: none;
          border-radius: 6px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          color: #fff;
          margin-bottom: 20px;
        }

        /* --- Knapper med billeder --- */
        .image-buttons {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .image-buttons a img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .image-buttons a.web img {
          width: 100px; /* dobbelt størrelse på desktop */
          height: 100px;
        }

        .image-buttons a img:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .home-banner {
            min-height: 60vh;
            font-size: 2.2rem;
            padding: 60px 20px 20px 20px;
            justify-content: flex-start;
          }

          .home-content {
            padding: 20px;
            font-size: 18px;
            line-height: 1.5;
          }

          .help-button {
            width: 100%;
            font-size: 16px;
            text-align: center;
          }

          .image-buttons a img {
            width: 40px;
            height: 40px;
          }

          .image-buttons a.web img {
            width: 80px; /* lidt større på mobil */
            height: 80px;
          }
        }
      `}</style>

      <div className="home-container">
        <div className="home-banner">
          Velkommen til Lindskov App!
          <div className="home-content">
            <p>
              Dette er Lindskovs kunde app.<br />
              Som kunde har du en personlig profil med login, som du kan bruge til dig/din virksomhed.<br /><br />
              Her kan du som kunde se hvilke aftaler og samarbejder dig/din virksomhed har hos Lindskov.<br /><br />
              Du kan se hvilke filer du har delt og modtaget og læse om nye og kommende projekter hos Lindskov.
            </p>
            <a href="/help" className="help-button">
              FAQ
            </a>
          </div>

          {/* --- Knapper med billeder uden for boksen --- */}
          <div className="image-buttons">
            <a
              href="https://www.linkedin.com/company/lindskov-communication/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linked.png" alt="LinkedIn" />
            </a>
            <a
              href="https://lindskov.com/"
              className="web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lindskovlogo.png" alt="Web" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
