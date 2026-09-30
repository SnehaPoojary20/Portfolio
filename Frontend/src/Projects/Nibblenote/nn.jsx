import "./nn.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";


const images = [
  "/projects/nn/img1.png",
  "/projects/nn/img2.png",
  "/projects/nn/img3.png",
  "/projects/nn/img4.png",
  "/projects/nn/img5.png",
  "/projects/nn/img6.png",
];

export default function NibbleNote() {
  return (
    <section className="pd-section">
      <div className="pd-container">
        <h1 className="pd-title">NibbleNote</h1>

        <p className="pd-paragraph">
          NibbleNote is a full-stack MERN application for discovering and
          reviewing restaurants and cafés. Users can add restaurants, rate
          them, and leave written reviews, and search by name, cuisine, or
          free text through a relevance-ranked search that prioritises
          prefix matches over simple substring matches. Each restaurant's
          average rating and review count are recalculated and stored
          directly on its record whenever a review is added, edited, or
          deleted, so reads stay fast without joining across collections.
          The app also includes an AI-generated summary of what reviewers
          are saying about a place, cached for a day to avoid unnecessary
          repeat calls to the language model.
        </p>

        <div className="pd-stack">
          <p className="pd-row"><span className="pd-label">Tech Stack:</span></p>
          <p className="pd-row"><span className="pd-label">Frontend:</span> React.js, React Router, Axios, plain CSS</p>
          <p className="pd-row"><span className="pd-label">Backend:</span> Node.js, Express.js, Mongoose</p>
          <p className="pd-row"><span className="pd-label">Database:</span> MongoDB (aggregation pipeline, compound indexes)</p>
          <p className="pd-row"><span className="pd-label">Authentication:</span> JWT (access + refresh tokens)</p>
          <p className="pd-row"><span className="pd-label">Deployment:</span> Vercel (frontend), Render (backend)</p>
        </div>

        <p className="pd-row">
          <span className="pd-label">GitHub:</span>{" "}
          <a href="https://github.com/SnehaPoojary20/NibbleNote" target="_blank" rel="noopener noreferrer">
            https://github.com/SnehaPoojary20/NibbleNote
          </a>
        </p>
        <p className="pd-row">
          <span className="pd-label">Live:</span>{" "}
          <a href="https://nibble-note.vercel.app" target="_blank" rel="noopener noreferrer">
            https://nibble-note.vercel.app
          </a>
        </p>

        <h3 className="pd-screens-heading">Screenshots</h3>
        <ProjectCarousel images={images} projectName="NibbleNote" />
      </div>
    </section>
  );
}