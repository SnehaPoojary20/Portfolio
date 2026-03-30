import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const hackathons = [
    {
      title: "Achievements",
      date: "",
      description: [
        "Solved 200+ Data Structures and Algorithms problems with focus on time/space optimization",
        "Built multiple production-grade backend systems and AI-integrated developer tools",
        "Strong focus on clean architecture, scalability, and real-world system design"
      ]
    }
  ];

  const openSource = [
    {
      title: "EduLinkUp",
      date: "2026",
      description: [
        "Contributed to improving scalability and performance of an open-access educational platform.",
        "Refactored backend components to enhance maintainability and system responsiveness."
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


