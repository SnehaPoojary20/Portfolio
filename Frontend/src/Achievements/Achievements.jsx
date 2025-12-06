import React from 'react';
import "./Achievements.css";

const Achievements = () => {
  const hackathons = [
    {
      title: "Finalist (Frontend Shortlist) – Outlier AI CodeCircuit Hackathon",
      date: "May 23, 2025",
      description: [
        "Selected among top participants for frontend role based on performance in technical round.",
        "Demonstrated skills in React, UI/UX design, and component-based architecture."
      ],
      image: "./outlier.png"
    },
    {
      title: "Participant – Level Up: Vibe Coding Hackathon",
      date: "May 2025",
      description: [
        "Built an AI-powered Instagram clone with an auto-caption generator using React, Node.js, and NLP APIs.",
        "Collaborated in a team of 3, completed the MVP in 48 hours."
      ]
    },
    {
      title: "Finalist – Web3 Hygiene DAO Hackathon (AI Summit Hackathon 2025)",
      date: "June 2025",
      description: [
        "Developed Kitchen Hygiene DAO using YOLOv8, FastAPI, React, and Smart Contracts.",
        "Enabled decentralized violation logging with IPFS and Polygon Mumbai."
      ]
    }
  ];

  const openSource = [
    {
      title: "Open Source Contributor – Sugar Labs",
      date: "Mar 2025 – Apr 2025",
      description: [
        "Debugged `Browse Activity` (#987), improved Abacus tutorials (#837).",
        "Proposed and submitted “AI-Powered Debugger for Music Blocks” for GSoC 2025."
      ]
    }
  ];

  return (
    <section className='achievements-section'>
      <h1 className='section-heading'>Achievements</h1>

      <div className='category'>
        <h2>🏆 Hackathons</h2>
        {hackathons.map((item, index) => (
          <div className='achievement-card' key={index}>
            <h3>{item.title}</h3>
            <p className='date'>🗓️ {item.date}</p>
            <ul>
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {item.image && <img src={item.image} alt={item.title} className='achievement-img' />}
          </div>
        ))}
      </div>

      <div className='category'>
        <h2>🔧 Open Source Contributions</h2>
        {openSource.map((item, index) => (
          <div className='achievement-card' key={index}>
            <h3>{item.title}</h3>
            <p className='date'>🗓️ {item.date}</p>
            <ul>
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements;

