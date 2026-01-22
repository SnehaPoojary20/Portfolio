import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const hackathons = [
    {
      title: "Finalist (Frontend Shortlist) – Outlier AI CodeCircuit Hackathon",
      date: "May 2025",
      description: [
        "Selected among top participants for frontend role based on performance in technical evaluation rounds.",
        "Demonstrated strong proficiency in React, UI/UX principles, and component-driven architecture."
      ]
    },
    {
      title: "Participant – Level Up: Vibe Coding Hackathon",
      date: "May 2025",
      description: [
        "Built an AI-powered Instagram clone featuring automated caption generation using React, Node.js, and NLP APIs.",
        "Collaborated within a team of 3 and delivered a functional MVP within a 48-hour time constraint."
      ]
    },
    {
      title: "Finalist – Web3 Hygiene DAO Hackathon (AI Summit Hackathon 2025)",
      date: "June 2025",
      description: [
        "Developed a Kitchen Hygiene DAO leveraging YOLOv8, FastAPI, React, and smart contracts.",
        "Enabled decentralized violation logging using IPFS and Polygon Mumbai network."
      ]
    }
  ];

  const openSource = [
    {
      title: "Open Source Contributor – Sugar Labs",
      date: "Mar 2025 – Apr 2025",
      description: [
        "Resolved issues in Browse Activity (#987) and improved Abacus tutorials (#837).",
        "Proposed and submitted an idea for GSoC 2025: AI-Powered Debugger for Music Blocks."
      ]
    }
  ];

  return (
    <section className="achievements-section">
      <h1 className="section-heading">Achievements</h1>

      <div className="achievements-category">
        <h2 className="category-heading">Hackathons</h2>

        {hackathons.map((item, index) => (
          <div key={index} className="achievement-item">
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-date">{item.date}</p>
            <ul className="achievement-points">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="achievements-category">
        <h2 className="category-heading">Open Source Contributions</h2>

        {openSource.map((item, index) => (
          <div key={index} className="achievement-item">
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-date">{item.date}</p>
            <ul className="achievement-points">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;


