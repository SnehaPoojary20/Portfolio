import React from "react";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about">
      {/* Profile Image */}
      <div className="image">
        <img
          className="profile-img"
          src="/Sneha.png"
          alt="Sneha Poojary"
        />
      </div>

      {/* Description */}
      <div className="description">
        <h1 className="title">
          Hello, I’m <span>Sneha Poojary</span>
        </h1>

     <p className="bio">
  I am a <strong>Computer Engineering student (Class of 2026)</strong> with strong foundations in Data Structures and Algorithms and 200+ solved coding problems. I focus on building scalable backend systems with clean architecture and performance-driven design.
</p>

<p className="bio">
  I have engineered <strong>ML-driven code intelligence tools</strong>, including a bug-risk prediction system using XGBoost and a context-aware code analysis engine built with AST and Tree-sitter. My work centers around repository analytics, feature engineering, and high-performance API development using FastAPI.
</p>

<p className="bio">
  I enjoy solving systems-oriented problems and building developer-focused tools that combine backend engineering with applied machine learning to automate and optimize software analysis workflows.
</p>

       
      </div>
    </section>
  );
};

export default Aboutme;


