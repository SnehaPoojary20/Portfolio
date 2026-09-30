import "./emc.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";


const images = [
  "/projects/emc/img1.png",
  "/projects/emc/img2.png",
  "/projects/emc/img3.png",
  "/projects/emc/img4.png",
  "/projects/emc/img5.png",
  "/projects/emc/img6.png",
  "/projects/emc/img7.png"
];

export default function ExplainMyCode() {
  return (
    <section className="pd-section">
      <div className="pd-container">
        <h1 className="pd-title">Explain My Code</h1>

        <p className="pd-paragraph">
          Explain My Code is an AI-powered tool that takes any Python code
          and returns a structured, function-level explanation of what it
          does. Instead of sending raw code straight to a language model,
          the backend first parses it with Python's AST module to reliably
          extract every function's name, arguments, line number, and
          docstring. This structured data is then passed alongside the raw
          code to an LLM, which is intended to produce clearer, more
          accurate explanations than prompting on raw code alone. If the
          LLM call fails or no API key is configured, the endpoint still
          returns the AST-based results with a fallback message, so the
          core analysis keeps working even if the AI layer doesn't.
        </p>

        <div className="pd-stack">
          <p className="pd-row"><span className="pd-label">Tech Stack:</span></p>
          <p className="pd-row"><span className="pd-label">Frontend:</span> React.js, plain CSS</p>
          <p className="pd-row"><span className="pd-label">Backend:</span> Python, FastAPI</p>
          <p className="pd-row"><span className="pd-label">AI / ML:</span> Google Gemini API, Python AST module</p>
          <p className="pd-row"><span className="pd-label">Validation:</span> Pydantic v2</p>
          <p className="pd-row"><span className="pd-label">Deployment:</span> Vercel (frontend), Render (backend)</p>
        </div>

        <p className="pd-row">
          <span className="pd-label">GitHub:</span>{" "}
          <a href="https://github.com/SnehaPoojary20/Explain-My-Code" target="_blank" rel="noopener noreferrer">
            https://github.com/SnehaPoojary20/Explain-My-Code
          </a>
        </p>
        <p className="pd-row">
          <span className="pd-label">Live:</span>{" "}
          <a href="https://explain-my-code-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://explain-my-code-two.vercel.app/
          </a>
        </p>

        <h3 className="pd-screens-heading">Screenshots</h3>
        <ProjectCarousel images={images} projectName="Explain My Code" />
      </div>
    </section>
  );
}