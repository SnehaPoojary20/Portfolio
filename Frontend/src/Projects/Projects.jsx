import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // Added for live deployment links

const projects = [
  {
    title: "NibbleNote",
    badge: "Live", // Changed from null to Live since it has a deploy link now
    tagline: "40% DB latency cut · MERN stack · High-concurrency",
    description: [
      "Architected a scalable full-stack platform using the MERN stack designed to manage high-concurrency requests smoothly.",
      "Engineered modular REST microservices via Node.js and Express.js, integrating secure JWT state verification pipelines.",
      "Reduced lookup query latency by over 40% by implementing optimized compound indexing patterns within MongoDB.",
      "Developed fluid, responsive React.js frontends leveraging structured state management architectures for nested interaction feeds.",
      "Implemented targeted location-aware sorting algorithms and data caching components to scale background feed deliveries."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "REST APIs", "Vercel", "Render"],
    github: "https://github.com/SnehaPoojary20/NibbleNote",
    live: "https://nibble-note.vercel.app"
  },
  {
    title: "Silent Bug Predictor",
    badge: "Featured",
    tagline: "75% ML precision · XGBoost · End-to-end pipeline",
    description: [
      "Built an end-to-end machine learning platform to parse software repository logs and accurately forecast code regression risks.",
      "Automated high-throughput data processing layers using Pandas and GitHub REST APIs to clean commit metadata streams.",
      "Trained and optimized an XGBoost binary classification architecture, securing a stable 75% precision rate on production sets.",
      "Designed responsive React.js analytical dashboards to visualize code health hot-spots and minimize manual triage cycles.",
      "Structured highly optimized PostgreSQL database relations and utilized Docker containers to guarantee isolated deployments."
    ],
    tech: ["Python", "FastAPI", "XGBoost", "Pandas", "PostgreSQL", "Docker", "GitHub API", "React.js"],
    github: "https://github.com/SnehaPoojary20/Silent-Bug-Predictor",
    live: null // Keep null if this project doesn't have a public deployment link
  },
  {
    title: "Explain My Code",
    badge: "Live",
    tagline: "AST · OpenAI GPT-3.5 · Deployed",
    description: [
      "Built an AI-powered code analysis tool using Python's AST module to extract function names, arguments, line numbers, and docstrings from submitted Python code without execution.",
      "Integrated OpenAI GPT-3.5-turbo via asynchronous httpx calls, passing structured AST-extracted context alongside raw code to generate accurate, function-level natural language explanations.",
      "Built modular FastAPI backend with service-layer separation (ast_service, llm_service), Pydantic request/response validation, and CORS-enabled REST API consumed by a React.js frontend.",
      "Built React.js frontend with live code editor, line numbers, and structured results display showing per-function breakdown.",
      "Deployed backend on Railway and frontend on Vercel."
    ],
    tech: ["Python", "FastAPI", "AST", "OpenAI API", "httpx", "React.js", "Railway", "Vercel"],
    github: "https://github.com/SnehaPoojary20/Explain-My-Code",
    live: "https://explain-my-code-two.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-heading">Selected Projects</h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${index % 2 === 0 ? "align-left" : "align-right"}`}
          >
            <div className="project-content">
              <div className="project-top">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.badge && (
                    <span className="project-badge">{project.badge}</span>
                  )}
                </div>
                <div className="project-links-group" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub source"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      aria-label="Live deployment"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-tagline">{project.tagline}</p>

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
            </div>
          </div>
        ))}
      </div>

      <p className="projects-footer">
        More implementations and system-level work on{" "}
        <a href="https://github.com/SnehaPoojary20" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </p>
    </section>
  );
};

export default Projects;












