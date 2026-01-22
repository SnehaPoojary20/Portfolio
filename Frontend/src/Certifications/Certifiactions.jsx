import React from "react";
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Data Structures & Algorithms",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view",
    description:
      "Completed an in-depth DSA program covering core data structures, algorithms, and problem-solving techniques with strong emphasis on time and space complexity."
  },
  {
    title: "Full Stack Web Development",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view",
    description:
      "Completed a comprehensive full stack development course focused on building scalable MERN applications, RESTful APIs, and real-world project workflows."
  }
];

const CertificationsComponent = () => {
  return (
    <section className="achievements">
      <h1 className="achievements-heading">Certifications</h1>

      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-row">
            <div className="cert-left">
              <FaCertificate className="cert-icon" />
            </div>

            <div className="cert-right">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-platform">{cert.platform}</p>
              <p className="cert-desc">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsComponent;



