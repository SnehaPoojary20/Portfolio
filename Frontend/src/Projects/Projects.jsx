import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NibbleNote — Full-Stack Note-Taking Platform",
    description: [
      "Developed a full-stack note-taking application featuring real-time synchronization and a clean, responsive UI.",
      "Implemented a markdown-based editor with instant preview and auto-save functionality to prevent data loss.",
      "Optimized database queries to ensure fast retrieval of user notes and organized content using custom tags."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/SnehaPoojary20/NibbleNote"
  },
  {
    title: "Code Intelligence System",
    description: [
      "Built a tool using FastAPI and Tree-sitter to analyze code structures and find circular dependencies.",
      " Used Neo4j to map out code relationships, making dependency lookups 60% faster than standard databases.",
      "Created a background pipeline with Celery to calculate ”bug-risk” scores using an XGBoost model."
    ],
    tech: ["Python(FastAPI)", "Neo4j", "Redis", "Celery","Tree-sitter","XGBoost","Docker"],
    github: "https://github.com/SnehaPoojary20/Code-Intelligence-System"
  },
  {
    title: "Chronos Observability Workbench",
    description: [
      " Created a telemetry dashboard that stays smooth (60FPS) while rendering 100k+ data points",
      "Moved heavy data processing to Web Workers, reducing main-thread lag by 90% during high traffic",
      " Switched from JSON to Protocol Buffers for data transfer, cutting payload sizes by 65%."
    ],
    tech: ["React","Node.js", " Web Workers", "HTML", "WebSockets", " Protobuf"],
    github: "https://github.com/SnehaPoojary20/Chronos-Observability-Workbench"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">Selected Projects</h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${index % 2 === 0 ? "align-left" : "align-right"}`}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View Source
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="projects-footer">
        For additional projects and deeper system implementations, please visit my{" "}
        <a
          href="https://github.com/SnehaPoojary20"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub profile
        </a>.
      </p>
    </section>
  );
};

export default Projects;






