import "./Achievements.css";

const highlights = [
  {
    title: "Competitive Problem Solving",
    date: "Ongoing",
    description: [
      "240+ problems solved on LeetCode in Java, with active problem-solving on GeeksforGeeks alongside it.",
      "Strong command of arrays, trees, graphs, dynamic programming, and sliding-window patterns.",
      "Gold on HackerRank (Java); Bronze in Problem Solving."
    ]
  },
  {
    title: "Production-Grade Engineering",
    date: "2024 – 2026",
    description: [
      "Built 3 end-to-end systems — all live, publicly accessible, not just repos.",
      "Applied performance-conscious design throughout: query/index optimization, async non-blocking API calls, and modular service separation.",
      "Systems-first approach: every project architected for maintainability and clear separation of concerns."
    ]
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <span className="prompt-eyebrow" style={{ justifyContent: "center" }}>cat ./achievements.md</span>
      <h2 className="section-heading">Achievements</h2>
      <div className="achievements-category">
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




