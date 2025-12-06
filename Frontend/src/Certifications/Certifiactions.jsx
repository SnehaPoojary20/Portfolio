import React from 'react';
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "DSA Course",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view?usp=drive_link",
    description: "Pursued a comprehensive DSA course covering fundamental and advanced concepts."
  },
  {
    title: "Full Stack Web Development",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view?usp=drive_link",
    description: "Completed full stack development course covering MERN stack and real-world projects."
  },
];

const CertificationsComponent = () => {
  return (
    <section className='achievements'>
      <h1 className='achievements-heading'>My Journey of Excellence</h1>

      <div className='certifications-grid'>
        {certifications.map((cert, index) => (
          <div className='cert-card' key={index}>
            <FaCertificate className='cert-icon'/>
            <h3 className='cert-title'>{cert.title}</h3>
            <p className='cert-platform'>{cert.platform}</p>
            <p className='cert-desc'>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className='cert-link'>
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsComponent;


