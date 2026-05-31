import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const highlights = [
    {
      title: "Competitive Problem Solving",
      date: "Ongoing",
      description: [
        "Solved 200+ DSA problems on LeetCode and GeeksForGeeks with consistent focus on time and space complexity optimization.",
        "Strong command of arrays, trees, graphs, dynamic programming, and sliding window patterns — aligned with MAANG interview standards.",
        "Active on GeeksForGeeks with solutions covering core algorithmic paradigms."
      ]
    },
    {
      title: "Production-Grade Engineering",
      date: "2024 – 2026",
      description: [
        "Built 3 end-to-end production systems — all live, publicly accessible, not just repos.",
        "Delivered measurable outcomes: 40% MongoDB latency reduction, 75% XGBoost ML precision on held-out data.",
        "Systems-first approach: every project architected for scalability, fault tolerance, and maintainability."
      ]
    }
  ];

  // const openSource = [
  //   {
  //     title: "EduLinkUp",
  //     date: "2026",
  //     description: [
  //       "Contributed to scalability and performance improvements on an open-access educational platform serving concurrent users.",
  //       "Refactored backend components to reduce response latency and improve long-term maintainability."
  //     ]
  //   }
  // ];

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
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <div className="achievements-category">
        <h2 className="category-heading">Open Source Contributions</h2>
        {openSource.map((item, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-date">{item.date}</p>
            </div>
            <ul className="achievement-points">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div> */}

        {/* ))}
      </div> */}
    </section>
  );
};

export default Achievements;




