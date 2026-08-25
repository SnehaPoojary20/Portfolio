import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHashnode } from "react-icons/si";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <span className="prompt-eyebrow" style={{ justifyContent: "center" }}>./contact.sh</span>
      <h2 className="contact-heading">Let's build something that ships.</h2>
      <p className="contact-sub">Seeking SDE-1 / Backend / AI Engineer roles · Mumbai · Pune · Bengaluru · Remote · Available May 2026</p>

      <div className="contact-cards">
        <a className="contact-card" href="mailto:snehapoojary2004@gmail.com">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>snehapoojary2004@gmail.com</p>
          <span className="contact-open">Email Me</span>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/snehapoojary/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>in/snehapoojary</p>
          <span className="contact-open">Connect</span>
        </a>
        <a className="contact-card" href="https://github.com/SnehaPoojary20" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>SnehaPoojary20</p>
          <span className="contact-open">View Repos</span>
        </a>
        <a className="contact-card" href="https://leetcode.com/u/SnehaPoojary__/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="contact-icon" />
          <h3>LeetCode</h3>
          <p>SnehaPoojary__</p>
          <span className="contact-open">240+ Solved</span>
        </a>
        <a className="contact-card" href="https://www.hackerrank.com/profile/snehapoojary2004" target="_blank" rel="noopener noreferrer">
          <FaCode className="contact-icon" />
          <h3>HackerRank</h3>
          <p>snehapoojary2004</p>
          <span className="contact-open">View Profile</span>
        </a>
        <a className="contact-card" href="https://www.geeksforgeeks.org/profile/snehapoojary?tab=activity" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks className="contact-icon" />
          <h3>GeeksforGeeks</h3>
          <p>snehapoojary</p>
          <span className="contact-open">View Profile</span>
        </a>
        <a className="contact-card" href="https://hashnode.com/@snehapoojary" target="_blank" rel="noopener noreferrer">
          <SiHashnode className="contact-icon" />
          <h3>Technical Blog</h3>
          <p>@snehapoojary</p>
          <span className="contact-open">Read on Hashnode</span>
        </a>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Thane, India</p>
          <span className="contact-open">Open to Remote</span>
        </div>
        <a className="contact-card" href="https://drive.google.com/file/d/19CHkb1HVqLKDENXDXriFsLuS4kCQvTQz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="contact-icon" />
          <h3>Resume</h3>
          <p>Full PDF available</p>
          <span className="contact-open">Download PDF</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;


