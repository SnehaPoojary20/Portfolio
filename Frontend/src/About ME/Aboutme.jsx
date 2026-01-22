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
          I am a Software Engineer with strong foundations in Data Structures,
          Algorithms, and Object-Oriented Design, and hands-on experience
          building scalable backend systems using Java, JavaScript, and Python.
        </p>

        <p className="bio">
          I have designed and optimized RESTful APIs with a focus on correctness,
          performance, and maintainability, applying concepts such as efficient
          data modeling, indexing, caching, and asynchronous processing.
        </p>

        <p className="bio">
          I am particularly interested in systems-oriented problems and have
          implemented core backend components from scratch, including an
          in-memory cache with O(1) operations, LRU eviction, and TTL-based
          expiration, and a distributed monitoring and alerting system using
          Redis and WebSockets.
        </p>

        <p className="bio">
          Alongside development, I actively strengthen my algorithmic
          problem-solving skills and have solved 170+ problems on LeetCode,
          with emphasis on time and space complexity, edge-case handling,
          and clear reasoning.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;


