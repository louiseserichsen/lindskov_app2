// src/pages/HelpPage.jsx
import React, { useState, useEffect } from "react";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

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
      question: "Hvordan uploader og deler jeg filer?",
      answer:
        "Vi accepterer betaling med kreditkort, MobilePay og PayPal. Alle betalinger håndteres sikkert gennem krypterede forbindelser.",
    },
    {
      question: "Hvordan kontakter jeg support?",
      answer:
        "Du kan kontakte os via kontaktformularen på siden eller sende en mail til support@example.com. Vi besvarer henvendelser inden for 24 timer.",
    },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateTitle(true), 300);
    const timer2 = setTimeout(() => setAnimateContent(true), 600); // fade-in FAQ indhold
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-banner">
      <h1 className={`help-title ${animateTitle ? "animate" : ""}`}>FAQ</h1>

      <div className={`faq-content ${animateContent ? "animate" : ""}`}>
        {faqItems.map((item, i) => (
          <div
            key={i}
            className={`help-box ${openIndex === i ? "open" : ""}`}
            onClick={() => toggleBox(i)}
          >
            <h3>{item.question}</h3>
            <p className={`help-answer ${openIndex === i ? "visible" : "hidden"}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; width: 100%; }
        body { font-family: Arial, sans-serif; background-color: #111; color: #fff; overflow-x: hidden; }

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

        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .help-title {
          color: #C8A800;
          margin-bottom: 40px;
          font-size: 3rem;
          opacity: 0;
          text-align: center;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
        }

        .help-title.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        /* Centrering af FAQ bokse */
        .faq-content {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .faq-content.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
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

        .help-box:hover { background-color: rgba(50,50,50,0.95); }

        .help-box h3 {
          margin-top: 0;
          color: #C8A800;
          position: relative;
          text-align: center;
        }

        .help-box h3::after {
          content: "›";
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          transition: transform 0.3s ease;
        }

        .help-box.open h3::after { transform: translateY(-50%) rotate(-90deg); }

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
          .help-banner { padding: 20px 15px; }
          .help-title { font-size: 2rem; }
          .help-box { padding: 20px; }
        }

        @media (max-width: 480px) {
          .help-banner { padding: 15px 10px; }
          .help-title { font-size: 1.8rem; }
          .help-box { padding: 15px; }
        }
      `}</style>
    </div>
  );
}
