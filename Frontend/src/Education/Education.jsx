import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    university: "Universal College of Engineering, University of Mumbai",
    date: "Nov 2022 – May 2026",
    cgpa: "CGPA 7.21/10",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming"
    ]
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <span className="prompt-eyebrow" style={{ justifyContent: "center" }}>cat ./education.log</span>
      <h2 className="section-title">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="edu-meta">
            <span className="edu-date">{edu.date}</span>
            <span className="edu-cgpa">{edu.cgpa}</span>
          </div>
          <h3 className="degree">{edu.degree}</h3>
          <p className="university">{edu.university}</p>
          <div className="coursework">
            <span className="coursework-label">Relevant Coursework</span>
            <div className="coursework-tags">
              {edu.coursework.map((course, i) => <span key={i} className="course-tag">{course}</span>)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
