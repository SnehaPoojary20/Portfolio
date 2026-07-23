import React from "react";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <div className="image-wrapper">
          <img className="profile-img" src="/Sneha.jpeg" alt="Sneha Poojary" />
          <div className="availability-badge">
            <span className="badge-dot" />
            Open to SDE I · May 2026
          </div>
        </div>
      </div>

      <div className="description">
        <p className="about-eyebrow">Backend Engineer · AI Integration · Systems Thinker</p>

        <h1 className="title">Sneha Poojary</h1>

        <p className="bio">
          I'm a backend-focused Software Engineer finishing my B.E. in Computer Engineering
          at the University of Mumbai (May 2026, CGPA 7.21). I build REST APIs, ML pipelines,
          and AI-powered developer tools using Python, FastAPI, Node.js, and React.js.
        </p>

        <p className="bio">
          Recent work: applied MongoDB compound indexing to speed up query performance,
          trained an XGBoost classifier to rank GitHub files by bug-proneness, and built a
          live AST-based code explanation tool integrated with the Gemini API — deployed
          end-to-end on Render and Vercel.
        </p>

        <p className="bio">
          I approach every system with one question first: how does this fail at scale?
          That shows up in every decision I make — from database schema design to API
          service boundaries to container isolation.
        </p>

        <div className="about-cta">
          <a href="mailto:snehapoojary2004@gmail.com" className="btn-primary">Hire Me</a>
          <a href="https://drive.google.com/drive/folders/1WUxGKpBbu02MUqZa72df_PDHrfpOgia4"
             target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;



