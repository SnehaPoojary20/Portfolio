import { useEffect, useRef } from "react";
import "./Skills.css";

const skillSections = [
  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Express.js", "REST API Design", "Async Programming", "JWT Authentication"] },
  { label: "AI / ML", items: ["Google Gemini API", "XGBoost", "LLM Integration", "AST Parsing", "Pydantic v2"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "SQL"] },
  { label: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { label: "Infra & Tools", items: ["Docker", "Git", "GitHub Actions", "pytest", "Render", "Vercel"] },
  { label: "CS Fundamentals", items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"] },
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
        <span className="prompt-eyebrow">cat ./skills.json</span>
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




