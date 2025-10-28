// src/pages/Nyheder.jsx
import React, { useEffect, useState } from "react";

export default function Nyheder() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  const newsItems = [
    {
      title: "Ny opdatering i Lindskov Appen",
      date: "28. oktober 2025",
      content:
        "Vi har forbedret appens stabilitet og tilføjet nye funktioner, så du nemmere kan dele og modtage filer.",
    },
    {
      title: "Demokratikursus",
      date: "25. oktober 2025",
      content:
        "Kursus i nærdemokrati for boligorganisationer, der vil styrke deres stemme lokalt.",
    },
    {
      title: "Ny FAQ-side lanceret",
      date: "15. oktober 2025",
      content:
        "Du kan nu finde svar på de mest stillede spørgsmål på vores nye FAQ-side direkte i appen.",
    },
    {
      title: "Nyeste kunder",
      date: "10. oktober 2025",
      content:
        "Vi byder velkommen til vores nye kunder og samarbejdspartnere.",
    },
    {
      title: "Årshjul 2025",
      date: "1. juli 2025",
      content:
        "Her kan du se årshjul for din virksomhed.",
    },
    {
      title: "Nyt design på forsiden",
      date: "15. juni 2025",
      content:
        "Forsiden har fået et nyt, mere moderne udseende – tjek det ud næste gang du logger ind!",
    },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setAnimateTitle(true), 300);
    const t2 = setTimeout(() => setAnimateContent(true), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="news-banner">
      <h1 className={`news-title ${animateTitle ? "animate" : ""}`}>Nyheder</h1>

      <div className={`news-content ${animateContent ? "animate" : ""}`}>
        {newsItems.map((news, index) => (
          <div key={index} className="news-box">
            <h3>{news.title}</h3>
            <p className="news-date">{news.date}</p>
            <p>{news.content}</p>
          </div>
        ))}
      </div>

      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #111;
          color: #fff;
          margin: 0;
          padding: 0;
        }

        .news-banner {
          width: 100%;
          min-height: 100vh;
          background: url("/12.jpg") no-repeat center center / cover;
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

        .news-title {
          color: #C8A800;
          font-size: 3rem;
          margin-bottom: 40px;
          opacity: 0;
          text-align: center;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
        }

        .news-title.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        /* Layout til bokse */
        .news-content {
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 20px;
          width: 100%;
          max-width: 1000px;
        }

        .news-content.animate {
          opacity: 1;
          animation: fadeSlideDown 1s ease forwards;
        }

        .news-box {
          background-color: rgba(34, 34, 34, 0.9);
          border-radius: 12px;
          width: 300px;
          padding: 25px 20px;
          line-height: 1.6;
          color: #fff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, background-color 0.3s ease;
          text-align: center;
        }

        .news-box:hover {
          transform: translateY(-5px);
          background-color: rgba(50,50,50,0.95);
        }

        .news-box h3 {
          color: #C8A800;
          margin-bottom: 10px;
        }

        .news-date {
          color: #aaa;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }

        /* Mobilvenligt layout */
        @media (max-width: 900px) {
          .news-content {
            flex-direction: column;
            align-items: center;
          }
          .news-box {
            width: 80%;
            max-width: 400px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
