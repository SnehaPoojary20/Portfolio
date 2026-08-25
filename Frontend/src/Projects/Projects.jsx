import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Explain My Code",
    badge: "Live",
    tagline: "AST pre-processing · Gemini API · Graceful degradation",
    description: [
      "Built an AI-powered code analysis tool that structurally pre-processes source with Python's AST module — parsing FunctionDef/AsyncFunctionDef nodes for parameters, docstrings, and metadata — before it ever reaches an LLM, cutting prompt ambiguity.",
      "Orchestrated Gemini API calls asynchronously via httpx (30s timeout, prompt-injection guard) and validated every response against strictly typed Pydantic v2 schemas.",
      "Built graceful degradation into the LLM layer: on API-key, timeout, or rate-limit failure, the service falls back to an AST-only structural summary instead of erroring out.",
      "Migrated from the OpenAI API to Google Gemini's OpenAI-compatible endpoint after hitting OpenAI quota limits.",
      "Deployed frontend on Vercel, backend on Render."
    ],
    tech: ["Python", "FastAPI", "React.js", "Python AST", "Google Gemini API", "Pydantic v2", "httpx", "Vercel", "Render"],
    github: "https://github.com/SnehaPoojary20/Explain-My-Code",
    live: "https://explain-my-code-two.vercel.app/"
  },
  {
    title: "Silent Bug Predictor",
    badge: "Live",
    tagline: "AST features · XGBoost · GitHub commit history",
    description: [
      "Built a FastAPI service that scores Python files for bug risk; persisted every analysis to PostgreSQL via async SQLAlchemy instead of returning stateless one-off output, enabling historical lookups.",
      "Extracted structural signals (LOC, function count, cyclomatic complexity) via Python AST parsing over regex, combined with GitHub REST API commit-history features, handling 404/403/timeout responses explicitly for pipeline resilience.",
      "Trained an XGBoost binary classifier on the combined features to produce a per-file bug-risk score.",
      "Secured all endpoints with per-user JWT auth (bcrypt-hashed passwords) and per-IP rate limiting.",
      "8-case pytest suite (all passing) covering AST edge cases, run automatically on every push via GitHub Actions CI; containerized with Docker, deployed on Render."
    ],
    tech: ["FastAPI", "XGBoost", "PostgreSQL", "GitHub REST API", "Python AST", "JWT", "pytest", "Docker", "Render"],
    github: "https://github.com/SnehaPoojary20/Silent-Bug-Predictor",
    live: "https://silent-bug-predictor.vercel.app"
  },
  {
    title: "NibbleNote",
    badge: "Live",
    tagline: "MERN · Weighted search ranking · LLM review summaries",
    description: [
      "Engineered a full-stack MERN discovery platform for restaurant and café reviews, with a weighted-relevance search endpoint ranking prefix matches above substring matches via MongoDB's aggregation pipeline (top-8 results, paginated).",
      "Denormalized avgRating/totalReviews onto the Restaurant document, recalculated on every review write, to avoid a join with the reviews collection on every read.",
      "Structured the Express.js REST API with access + refresh token JWT authentication (httpOnly, secure cookies) and a dedicated refresh endpoint; enforced duplicate-location prevention via a unique compound index.",
      "Built an LLM-powered review summarizer (\"vibe check\") called via Axios, backed by a 24-hour in-memory cache with automatic invalidation on review create/update/delete."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "LLM API", "Tailwind CSS", "Vercel", "Render"],
    github: "https://github.com/SnehaPoojary20/NibbleNote",
    live: "https://nibble-note.vercel.app"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <span className="prompt-eyebrow" style={{ justifyContent: "center" }}>git log --oneline ./projects</span>
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? "align-left" : "align-right"}`}>
            <div className="project-content">
              <div className="project-top">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </div>
                <div className="project-links-group">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} GitHub source`}>
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link" aria-label={`${project.title} live deployment`}>
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












