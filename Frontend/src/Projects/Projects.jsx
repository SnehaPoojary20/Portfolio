import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    name: "NibbleNote",
    slug: "nibblenote",
    img: "/projects/proj1.png",
  },
  {
    name: "Explain My Code",
    slug: "explain-my-code",
    img: "/projects/proj2.png",
  },
  {
    name: "Silent Bug Predictor",
    slug: "silent-bug-predictor",
    img: "/projects/proj3.png",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        <p className="projects-intro">
          I build end-to-end backend systems that go from schema design
          through testing and CI/CD to live deployment. My projects usually
          combine asynchronous APIs, real databases, and some form of ML or
          LLM integration, with a focus on secure authentication, graceful
          error handling, and code that's actually tested rather than just
          demoed.
        </p>

        <br></br> <br></br> <br></br> 
        <p className="projects-subline">Here are a few of my projects:</p>
         <br></br> 
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              className="project-card"
              to={`/projects/${project.slug}`}
            >
              <img
                src={project.img}
                alt={project.name}
                className="project-card-img"
              />
              <h3 className="project-card-title">{project.name}</h3>
            </Link>
          ))}
        </div>
          <br></br> <br></br>
        <p className="projects-more">
          For more projects, do visit my{" "}
          <a
            href="https://github.com/SnehaPoojary20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}











