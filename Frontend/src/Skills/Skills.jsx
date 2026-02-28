import React from "react";
import "./Skills.css";

const skillSections = [
  {
    title: "Backend Engineering",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST API Design",
      "WebSockets",
      "Asynchronous Programming",
      "Docker"
    ]
  },
  {
    title: "Machine Learning & Code Intelligence",
    items: [
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "Feature Engineering",
      "AST Parsing",
      "Tree-sitter",
      "NetworkX"
    ]
  },
  {
    title: "Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems",
      "Time & Space Complexity"
    ]
  },
  {
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Redux", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Databases & Tools",
    items: [
      "MongoDB",
      "SQL",
      "Firebase",
      "Git",
      "GitHub Actions"
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Technical Skills</h1>

      <div className="skills-container">
        {skillSections.map((section, index) => (
          <div key={index} className="skills-block">
            <h3 className="skills-heading">{section.title}</h3>
            <ul className="skills-list">
              {section.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;





