import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const highlights = [
    {
      title: "Competitive Problem Solving",
      date: "Ongoing",
      description: [
        "Solved 200+ DSA problems on LeetCode and GeeksForGeeks with consistent focus on time and space complexity.",
        "Strong command of arrays, trees, graphs, dynamic programming, and sliding window patterns.",
        "Active on GeeksForGeeks with solutions covering core algorithmic paradigms."
      ]
    },
    {
      title: "Production-Grade Engineering",
      date: "2024 – 2026",
      description: [
        "Built 3 end-to-end systems — all live, publicly accessible, not just repos.",
        "Applied performance-conscious design throughout: compound database indexing, async non-blocking API calls, and modular service separation.",
        "Systems-first approach: every project architected for maintainability and clear separation of concerns."
      ]
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <h1 className="section-heading">Achievements</h1>
      <div className="achievements-category">
        <h2 className="category-heading">Track Record</h2>
        {highlights.map((item, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-date">{item.date}</p>
            </div>
            <ul className="achievement-points">
              {item.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;




