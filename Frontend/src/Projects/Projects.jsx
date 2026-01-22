import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NibbleNote — Full-Stack Note-Taking Platform",
    description: [
      "Built a secure full-stack note-taking application with authentication, authorization, and complete CRUD workflows for persistent, user-specific data storage.",
      "Designed RESTful backend APIs and optimized MongoDB queries using indexing and efficient schema design to reduce response latency and support scalable data access.",
      "Applied modular architecture and strict separation of concerns across frontend and backend, improving maintainability and long-term extensibility."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/SnehaPoojary20/NibbleNote"
  },
  {
    title: "In-Memory Cache with LRU Eviction & TTL",
    description: [
      "Architected an O(1) in-memory key-value cache in Java using a custom HashMap and Doubly Linked List, simulating internals of production caches like Redis.",
      "Implemented Least Recently Used (LRU) eviction and TTL-based expiration to balance memory efficiency with data freshness.",
      "Stress-tested the cache under concurrent access to analyze latency, throughput, and eviction behavior under load."
    ],
    tech: ["Java", "Data Structures", "Concurrency", "Benchmarking"],
    github: "https://github.com/SnehaPoojary20/In-Memory-Cache-with-LRU-Eviction-and-TTL"
  },
  {
    title: "PulseGuard — Distributed Monitoring & Alerting System",
    description: [
      "Engineered a high-throughput monitoring system using Redis for centralized state management and WebSockets for real-time, sub-second alert delivery.",
      "Implemented a sliding window rate limiter to prevent alert storms and ensure stability during traffic spikes.",
      "Offloaded heavy monitoring and aggregation tasks to asynchronous worker queues, reducing main-thread blocking by approximately 60%."
    ],
    tech: ["Node.js", "FastAPI", "Redis", "WebSockets", "Async Processing", "Docker"],
    github: "https://github.com/SnehaPoojary20/PulseGuard"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">Selected Projects</h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${index % 2 === 0 ? "align-left" : "align-right"}`}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View Source
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="projects-footer">
        For additional projects and deeper system implementations, please visit my{" "}
        <a
          href="https://github.com/SnehaPoojary20"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub profile
        </a>.
      </p>
    </section>
  );
};

export default Projects;






