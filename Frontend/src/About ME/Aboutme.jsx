import React from "react";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <div className="image-wrapper">
          <img
            className="profile-img"
            src="/Sneha.jpeg"
            alt="Sneha Poojary"
          />
          <div className="availability-badge">
            <span className="badge-dot" />
            Open to SDE I · May 2026
          </div>
        </div>
      </div>

      <div className="description">
        <p className="about-eyebrow">
          Backend Engineer · AI Tools · Systems Thinker
        </p>

        <h1 className="title">
          Sneha <span className="title-accent">Poojary</span>
        </h1>

        <p className="bio">
          I'm a backend-focused Software Engineer finishing my B.E. in Computer
          Engineering at the University of Mumbai (May 2026, CGPA 8.09). I
          build things that <strong>ship under load</strong> — scalable REST
          APIs, ML pipelines, and AI-powered developer tools using{" "}
          <strong>Python · FastAPI · Node.js · React.js</strong>.
        </p>

        <p className="bio">
          Recent proof: cut <strong>MongoDB query latency by 40%</strong> via
          compound indexing, shipped an XGBoost regression predictor hitting{" "}
          <strong>75% precision on held-out production data</strong>, and built
          a live AST + GPT-3.5 code explanation tool — deployed end-to-end on
          Railway and Vercel.
        </p>

        <p className="bio">
          I approach every system with one question first:{" "}
          <em>how does this fail at scale?</em> That thinking shows up in every
          architectural decision I make — from database schema design to API
          service boundaries to Docker container isolation.
        </p>

        <div className="about-cta">
          <a
            href="mailto:snehapoojary2004@gmail.com"
            className="btn-primary"
          >
            Hire Me
          </a>

          <a
            href="https://drive.google.com/drive/folders/1WUxGKpBbu02MUqZa72df_PDHrfpOgia4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;



