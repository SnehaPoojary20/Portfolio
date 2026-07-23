import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "NibbleNote",
    badge: "Live",
    tagline: "MERN stack · MongoDB compound indexing · REST APIs",
    description: [
      "Architected a full-stack restaurant discovery platform using the MERN stack with location-based search, reviews, and image posts.",
      "Built modular REST APIs via Node.js and Express.js with controller-service separation across users, reviews, posts, and location domains.",
      "Applied MongoDB compound indexing and geospatial ranking ($near, 2dsphere) to keep the primary discovery feed query fast as data grows.",
      "Implemented stateless JWT authentication middleware at the route level, avoiding server-side session storage for horizontal scalability.",
      "Shipped continuous delivery from GitHub to Vercel/Render."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "REST APIs", "Vercel", "Render"],
    github: "https://github.com/SnehaPoojary20/NibbleNote",
    live: "https://nibble-note.vercel.app"
  },
  {
    title: "Silent Bug Predictor",
    badge: "Live",
    tagline: "AST analysis · XGBoost · End-to-end ML pipeline",
    description: [
      "Built an end-to-end ML pipeline that analyzes GitHub repositories and ranks files by bug-proneness.",
      "Combined AST-derived code-complexity metrics (LOC, function count, cyclomatic complexity) with commit-history signals pulled via the GitHub REST API.",
      "Trained an XGBoost binary classifier over logistic regression to capture interaction effects between code complexity and contributor activity.",
      "Designed a FastAPI backend with clear separation between feature-extraction, GitHub-integration, and inference layers, exposing a POST /analyze endpoint.",
      "Deployed on Render with a Dockerized build for reproducibility."
    ],
    tech: ["Python", "FastAPI", "XGBoost", "Pandas", "PostgreSQL", "Docker", "GitHub API"],
    github: "https://github.com/SnehaPoojary20/Silent-Bug-Predictor",
    live: "https://silent-bug-predictor.vercel.app"
  },
  {
    title: "Explain My Code",
    badge: "Live",
    tagline: "AST · Google Gemini API · Deployed",
    description: [
      "Built an AI-powered code analysis tool using Python's AST module to extract function names, arguments, line numbers, and docstrings without executing code.",
      "Integrated the Gemini API via asynchronous httpx calls, passing structured AST-extracted context alongside raw code for accurate, function-level explanations.",
      "Built a modular FastAPI backend with service-layer separation (ast_service, llm_service) and Pydantic request/response validation.",
      "Built a React.js frontend with a live code editor and structured per-function results display.",
      "Deployed backend on Railway and frontend on Vercel."
    ],
    tech: ["Python", "FastAPI", "AST", "Google Gemini API", "httpx", "React.js", "Railway", "Vercel"],
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
          <div key={index} className={`project-item ${index % 2 === 0 ? "align-left" : "align-right"}`}>
            <div className="project-content">
              <div className="project-top">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </div>
                <div className="project-links-group" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub source">
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link" aria-label="Live deployment">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-tagline">{project.tagline}</p>
              <ul className="project-description">
                {project.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, i) => <span key={i} className="tech-pill">{tech}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="projects-footer">
        More implementations and system-level work on{" "}
        <a href="https://github.com/SnehaPoojary20" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </p>
    </section>
  );
};

export default Projects;












