// src/pages/HelpPage.jsx
import React, { useState } from "react";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Hvordan opretter jeg en konto?",
      answer:
        "Klik på 'Opret konto' øverst på siden og udfyld formularen med dit navn, e-mail og adgangskode. Du modtager derefter en bekræftelsesmail.",
    },
    {
      question: "Jeg har glemt min adgangskode – hvad gør jeg?",
      answer:
        "Tryk på 'Glemt adgangskode' på login-siden, og følg instruktionerne for at nulstille din adgangskode via e-mail.",
    },
    {
      question: "Hvordan ændrer jeg mine profiloplysninger?",
      answer:
        "Gå til 'Min profil' og klik på 'Rediger'. Her kan du ændre dine oplysninger og gemme ændringerne med et enkelt klik.",
    },
    {
      question: "Hvilke betalingsmetoder accepteres?",
      answer:
        "Vi accepterer betaling med kreditkort, MobilePay og PayPal. Alle betalinger håndteres sikkert gennem krypterede forbindelser.",
    },
    {
      question: "Hvordan kontakter jeg support?",
      answer:
        "Du kan kontakte os via kontaktformularen på siden eller sende en mail til support@example.com. Vi besvarer henvendelser inden for 24 timer.",
    },
  ];

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-banner">
      <h1 className="help-title">FAQ</h1>

      {/* Dynamisk genererede bokse med åbne/lukke funktion */}
      {faqItems.map((item, i) => (
        <div
          key={i}
          className={`help-box ${openIndex === i ? "open" : ""}`}
          onClick={() => toggleBox(i)}
        >
          <h3>{item.question}</h3>
          <p
            className={`help-answer ${
              openIndex === i ? "visible" : "hidden"
            }`}
          >
            {item.answer}
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
          background: url("/7.jpg") no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }

        .help-title {
          color: #C8A800; /* Guld-farve */
          margin-bottom: 40px;
          font-size: 3rem;
        }

        .help-box {
          background-color: rgba(34,34,34,0.9);
          border-radius: 12px;
          max-width: 800px;
          width: 100%;
          padding: 25px 30px;
          margin-top: 25px;
          line-height: 1.6;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .help-box:hover {
          background-color: rgba(50,50,50,0.95);
        }

        .help-box h3 {
          margin-top: 0;
          color: #C8A800;
          position: relative;
        }

        /* Tilføj pil */
        .help-box h3::after {
          content: "›";
          position: absolute;
          right: 0;
          top: 0;
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }

        .help-box.open h3::after {
          transform: rotate(-90deg);
        }

        .help-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .help-answer.visible {
          max-height: 300px;
          opacity: 1;
          margin-top: 10px;
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
          }
        }

        @media (max-width: 480px) {
          .help-banner {
            padding: 15px 10px;
          }

          .help-title {
            font-size: 1.8rem;
          }

          .help-box {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}
