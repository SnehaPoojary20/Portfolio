import React from "react";
import "./Skills.css";

const skillSections = [
  {
    title: "System Design & Engineering",
    items: [
      "System Design Fundamentals",
      "Scalability & Load Handling",
      "Caching (LRU, TTL)",
      "Rate Limiting (Sliding Window)",
      "Concurrency & Thread Safety",
      "Asynchronous Processing",
      "REST API Design"
    ]
  },
  {
    title: "Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Time & Space Complexity"
    ]
  },
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Redux", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "FastAPI", "MongoDB", "SQL"]
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "VS Code"]
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





