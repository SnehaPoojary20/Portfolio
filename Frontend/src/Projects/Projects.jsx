import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NibbleNote",
    description: [
      "Developed a full-stack note-taking application featuring real-time synchronization and a clean, responsive UI.",
      "Implemented a markdown-based editor with instant preview and auto-save functionality to prevent data loss.",
      "Optimized database queries to ensure fast retrieval of user notes and organized content using custom tags."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/SnehaPoojary20/NibbleNote"
  },
  {
    title: "Silent Bug Predictor",
    description: [
      "Engineered an ML-based system to predict bug-prone files using commit churn and structural complexity metrics.",
      "Trained and evaluated an XGBoost classifier achieving 75%+ precision on historical repository data.",
      "Developed a FastAPI backend to analyze GitHub repositories and generate probabilistic risk scores."
    ],
    tech: ["Python(FastAPI)", "XGBoost", "Pandas", " GitHub API","Docker"],
    github: "https://github.com/SnehaPoojary20/Silent-Bug-Predictor"
  },
  {
    title: "Explain My Code",
    description: [
      "Designed a context-aware code analysis engine using AST and Tree-sitter to construct function-level call graphs.",
      "Implemented structured semantic extraction to generate accurate function-specific summaries.",
      "Built modular FastAPI endpoints for scalable, real-time code interpretation."
    ],
    tech: ["Python(FastAPI)","AST", "Tree-sitter", "NetworkX", "OpenAI API", "Docker"],
    github: "https://github.com/SnehaPoojary20/Explain-My-Code"
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






