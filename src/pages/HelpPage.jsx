// src/pages/HelpPage.jsx
import React from "react";

export default function HelpPage() {
  return (
    <div className="help-banner">
      <h1 className="help-title">FAQ</h1>

      {/* 5 ens bokse oven på hinanden */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="help-box">
          <h3>Eksempel spørgsmål {i + 1}</h3>
          <p>
            Her kan du skrive vejledningstekst eller svar på spørgsmål. Teksten
            vises inde i boksen med den mørke baggrund, og baggrundsbilledet fylder
            hele siden som på forsiden.
          </p>
        </div>
      ))}

      {/* --- CSS --- */}
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

        /* Hele siden med baggrund */
        .help-banner {
          width: 100%;
          min-height: 100vh;
          background: url("/lindskov3.jpg") no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }

        .help-title {
          color: #fff;
          margin-bottom: 40px;
          font-size: 3rem;
        }

        .help-box {
          background-color: rgba(34,34,34,0.9);
          border-radius: 12px;
          max-width: 800px;
          width: 100%;
          padding: 30px;
          margin-top: 40px;
          line-height: 1.6;
          color: #fff;
        }

        .help-box h3 {
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .help-banner {
            padding: 20px 15px;
          }

          .help-title {
            font-size: 2rem;
          }

          .help-box {
            padding: 20px;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
}
