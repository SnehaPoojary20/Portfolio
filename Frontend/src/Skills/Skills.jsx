import "./Skills.css";

const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["React.js", "Tailwind CSS", "Axios"] },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Asynchronous Programming",
      "JWT Authentication",
    ],
  },
  {
    label: "AI / ML",
    items: ["Google Gemini API", "XGBoost", "LLM Integration", "Python AST Analysis"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Query Optimization", "Indexing"],
  },
  {
    label: "Testing & Quality",
    items: ["pytest", "Automated Testing", "CI/CD", "Code Review", "Debugging"],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "Render"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-list-wrapper">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3 className="skill-label">{group.label}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



