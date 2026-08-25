import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Data Structures & Algorithms",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view",
    description: "In-depth DSA program covering core data structures, algorithms, and problem-solving with emphasis on time and space complexity analysis."
  },
  {
    title: "Full Stack Web Development",
    platform: "Apna College",
    link: "https://drive.google.com/file/d/1Hy3KsrzS1lPIXhAzmJN0dW3xONtBPnqr/view",
    description: "Comprehensive full-stack development course focused on building scalable MERN applications, RESTful API design, and real-world project delivery workflows."
  }
];

const CertificationsComponent = () => {
  return (
    <section className="achievements" id="certifications">
      <span className="prompt-eyebrow" style={{ justifyContent: "center" }}>ls ./certifications</span>
      <h2 className="achievements-heading">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-row">
            <div className="cert-left"><FaCertificate className="cert-icon" /></div>
            <div className="cert-right">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-platform">{cert.platform}</p>
              <p className="cert-desc">{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsComponent;






