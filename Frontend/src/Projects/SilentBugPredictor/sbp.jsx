import "./sbp.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

const images = [
  "/projects/sbp/img1.png",
  "/projects/sbp/img2.png",
  "/projects/sbp/img3.png",
  "/projects/sbp/img4.png",
  "/projects/sbp/img5.png",
  "/projects/sbp/img6.png",
  "/projects/sbp/img7.png",
  "/projects/sbp/img8.png",
  "/projects/sbp/img9.png",
  "/projects/sbp/img10.png"
];

export default function SilentBugPredictor() {
  return (
    <section className="pd-section">
      <div className="pd-container">
        <h1 className="pd-title">Silent Bug Predictor</h1>

        <p className="pd-paragraph">
          Silent Bug Predictor is a machine learning system that scans a
          GitHub repository and ranks its Python files by how likely each
          one is to contain bugs. It combines structural code metrics
          extracted via Python's AST module, such as lines of code,
          function count, and cyclomatic complexity, with commit-history
          signals pulled from the GitHub REST API, like commit count,
          number of contributors, and time since the file was last changed.
          These six engineered features are fed into an XGBoost classifier,
          which outputs a bug probability and risk level (low, medium, or
          high) for every file, and each analysis is persisted to
          PostgreSQL so past results can be revisited later.
        </p>

        <div className="pd-stack">
          <p className="pd-row"><span className="pd-label">Tech Stack:</span></p>
          <p className="pd-row"><span className="pd-label">Frontend:</span> React.js, plain CSS, Axios</p>
          <p className="pd-row"><span className="pd-label">Backend:</span> Python, FastAPI, SQLAlchemy (async)</p>
          <p className="pd-row"><span className="pd-label">Database:</span> PostgreSQL</p>
          <p className="pd-row"><span className="pd-label">Machine Learning:</span> XGBoost, Python AST module</p>
          <p className="pd-row"><span className="pd-label">Authentication:</span> JWT, bcrypt</p>
          <p className="pd-row"><span className="pd-label">Deployment:</span> Docker, Render</p>
        </div>

        <p className="pd-row">
          <span className="pd-label">GitHub:</span>{" "}
          <a href="https://github.com/SnehaPoojary20/Silent-Bug-Predictor" target="_blank" rel="noopener noreferrer">
            https://github.com/SnehaPoojary20/Silent-Bug-Predictor
          </a>
        </p>
        <p className="pd-row">
          <span className="pd-label">Live:</span>{" "}
          <a href="https://silent-bug-predictor.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://silent-bug-predictor.vercel.app/
          </a>
        </p>

        <h3 className="pd-screens-heading">Screenshots</h3>
        <ProjectCarousel images={images} projectName="Silent Bug Predictor" />
      </div>
    </section>
  );
}