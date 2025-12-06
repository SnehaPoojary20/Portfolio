import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NibbleNote – Restaurant Review Web App",
    date: "Oct 2025",
    points: [
      "Built a full-stack MERN application enabling users to discover restaurants and post reviews, resulting in a 40% faster review submission flow compared to the initial prototype.",
      "Integrated Google Maps API, improving location accuracy by 90% and increasing user engagement on the map view by 35%.",
      "Designed optimized APIs that reduced data fetch time by 25% using efficient indexing and query structuring.",
      "Implemented secure authentication using JWT, reducing unauthorized access attempts by 100% during internal testing."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "JWT", "Axios", "Vercel"],
    github: "https://github.com/SnehaPoojary20/NibbleNote"
  },
  {
    title: "EventNest – College Event Management System",
    date: "Nov 2025",
    points: [
      "Developed a role-based event platform used by 500+ students, handling 150+ event registrations during testing.",
      "Devised and launched a QR code check-in system using qrcode.react, decreasing manual verification by 70% and accelerating check-in times by 3 minutes.",
      "Automated email notifications with 95% delivery success, improving event communication.",
      "Designed real-time dashboards using Chart.js, increasing admin efficiency by 60%."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "qrcode.react", "Nodemailer", "Chart.js", "Vercel"],
    github: "https://github.com/SnehaPoojary20/EventNest"
  },
  {
    title: "Captionify – AI Caption Generator",
    date: "Dec 2025",
    points: [
      "Built an AI-powered caption generator improving user caption creation speed by 80% through automated suggestions.",
      "Integrated Cloudinary image upload, reducing upload latency by 30% and increasing reliability to 99% uptime.",
      "Improved user engagement by 45% through social media sharing features and personalized caption history.",
      "Orchestrated Firebase authentication, achieving a 100% login success rate during rigorous testing."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Firebase", "Cloudinary", "Vercel"],
    github: "https://github.com/SnehaPoojary20/Captionify"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>

            <ul className="project-list">
              {project.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <a href={project.github} className="project-github">
              <FaGithub className="github-icon"/> View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;




