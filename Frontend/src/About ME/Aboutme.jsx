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
          I am a <strong>Computer Engineering student (Class of 2026)</strong> with a passion for building high-performance systems and solving complex algorithmic challenges. With a foundation of <strong>200+ solved LeetCode problems</strong>, I focus on writing clean, efficient code that prioritizes both time and space complexity.
        </p>

        <p className="bio">
          My experience ranges from architecting <strong>distributed code analysis tools</strong> using FastAPI and Neo4j to developing real-time <strong>telemetry dashboards</strong>. I specialize in optimizing backend efficiency through Redis caching and Protocol Buffers, and I’ve successfully engineered frontends capable of rendering <strong>100k+ data points at a consistent 60FPS</strong>.
        </p>

        <p className="bio">
          Beyond personal projects, I am an active contributor to the <strong>Open Source community</strong>, recently refactoring core components for EduLinkUp to improve system scalability. I thrive on systems-oriented problems and am always looking for ways to bridge robust infrastructure with high-throughput performance.
        </p>

       
      </div>
    </section>
  );
};

export default Aboutme;


