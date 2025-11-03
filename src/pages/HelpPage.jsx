// src/pages/HelpPage.jsx
import React, { useState, useEffect } from "react";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateBoxes, setAnimateBoxes] = useState([]);

  const faqItems = [
    { question: "Hvad kan jeg bruge min konto til på Lindskov Appen?", answer: "Du kan uploade, dele og tilmelde dig events, samt følge nyheder." },
    { question: "Jeg har glemt min adgangskode – hvad gør jeg?", answer: "Tryk på 'Glemt adgangskode' på login-siden og følg vejledningen." },
    { question: "Hvordan ændrer jeg mine profiloplysninger?", answer: "Gå til 'Min profil' og klik på 'Rediger' for at ændre oplysninger." },
    { question: "Hvordan uploader og deler jeg filer?", answer: "Under DELTE FILER kan du uploade dokumenter og dele med andre brugere.<br />Under FILER kan du opbevare dine egne filer til senere brug." },
    { question: "Hvordan kontakter jeg support?", answer: "Kontakt os via supportformularen eller mail på support@lindskovapp.dk." },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateTitle(true), 300);

    faqItems.forEach((_, i) => {
      setTimeout(() => {
        setAnimateBoxes(prev => [...prev, i]);
      }, 500 + i * 200);
    });

    return () => clearTimeout(timer);
  }, []);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-banner">
      <h1 className={`help-title ${animateTitle ? "animate" : ""}`}>FAQ</h1>
      <div className="faq-content">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className={`help-box ${openIndex === i ? "open" : ""} ${animateBoxes.includes(i) ? "animate" : ""}`}
            onClick={() => toggleBox(i)}
          >
            <h3>{item.question}</h3>
            <p
              className={`help-answer ${openIndex === i ? "visible" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        ))}
      </div>

      <style>{`
        html, body { 
          margin: 0; 
          padding: 0; 
          overflow-x: hidden; 
          font-family: Arial, sans-serif; 
          background-color: #111; 
          color: #fff; 
          width: 100%; 
        }

        .help-banner { 
          width: 100%; 
          min-height: 100vh; 
          background: url("/7.jpg") no-repeat center/cover; 
          padding: 40px 10px; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          box-sizing: border-box;
        }

        .help-title { 
          font-size: 3rem; 
          color: #C8A800; 
          margin-bottom: 40px; 
          opacity: 0; 
          text-align: center; 
          text-shadow: 3px 3px 6px rgba(0,0,0,0.8); 
        }

        .help-title.animate { 
          opacity: 1; 
          animation: fadeSlideDown 1s ease forwards; 
        }

        @keyframes fadeSlideDown { 
          0% { opacity: 0; transform: translateY(-20px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }

        .faq-content { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          width: 100%; 
          max-width: 800px; 
          box-sizing: border-box;
        }

        .help-box { 
          background: rgba(34,34,34,0.9); 
          border-radius: 12px; 
          width: 100%; 
          max-width: 700px;
          padding: 25px 20px; 
          margin-top: 25px; 
          line-height: 1.6; 
          cursor: pointer; 
          transition: background 0.3s ease, opacity 1s ease, transform 1s ease; 
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(-20px);
        }

        .help-box.animate { 
          opacity: 1; 
          transform: translateY(0); 
        }

        .help-box:hover { background: rgba(50,50,50,0.95); }
        .help-box h3 { margin: 0; color: #C8A800; position: relative; text-align: center; }
        .help-box h3::after { content: "›"; position: absolute; right: 10px; top: 50%; transform: translateY(-50%) rotate(90deg); transition: transform 0.3s ease; }
        .help-box.open h3::after { transform: translateY(-50%) rotate(-90deg); }
        .help-answer { max-height: 0; overflow: hidden; opacity: 0; transition: all 0.4s ease; text-align: center; }
        .help-answer.visible { max-height: 300px; opacity: 1; margin-top: 15px; text-align: center; }

        @media (max-width: 768px) {
          .help-title { font-size: 2.2rem; }
          .help-box { width: 90%; max-width: 500px; padding: 20px; margin: 20px auto; }
        }

        @media (max-width: 480px) {
          .help-title { font-size: 1.8rem; }
          .help-box { width: 95%; max-width: 350px; padding: 15px; margin: 15px auto; }
        }
      `}</style>
    </div>
  );
}
