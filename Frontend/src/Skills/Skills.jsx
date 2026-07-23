import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skillSections = [
  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Express.js", "REST API Design", "Async Programming"] },
  { label: "AI / ML", items: ["Google Gemini API", "XGBoost", "Pandas", "Feature Engineering", "AST Parsing", "LLM Integration"] },
  { label: "Frontend", items: ["React.js", "HTML", "CSS"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "SQL", "MongoDB Indexing"] },
  { label: "Infra & Tools", items: ["Docker", "Git", "Railway", "Vercel", "Render"] },
  { label: "CS Fundamentals", items: ["Data Structures & Algorithms", "System Design", "OOP", "Operating Systems", "DBMS", "Computer Networks"] },
];

const Skills = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-inner">
        <p className="section-eyebrow">Technical Stack</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-grid">
          {skillSections.map((group, i) => (
            <div key={i} className="skill-group" style={{ transitionDelay: `${i * 0.07}s` }}>
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-tags">
                {group.items.map((item, j) => <span key={j} className="skill-tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




