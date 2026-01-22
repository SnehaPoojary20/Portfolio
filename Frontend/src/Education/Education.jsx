import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    university: "Universal College of Engineering, Kaman",
    date: "Nov 2022 – May 2026",
    cgpa: "7.0 / 10",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming"
    ]
  }
];

const Education = () => {
  return (
    <section className="education-section">
      <h1 className="section-heading">Education</h1>

      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3 className="degree">{edu.degree}</h3>
          <p className="university">{edu.university}</p>
          <p className="date-cgpa">
            <span className="dates">{edu.date}</span> | <span className="cgpa">CGPA (Sem 7): 8.09</span>
          </p>
          <div className="coursework">
            <strong>Relevant Coursework:</strong>
            <ul>
              {edu.coursework.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
