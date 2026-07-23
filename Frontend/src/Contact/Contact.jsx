import React from 'react';
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHashnode } from "react-icons/si";

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <h1 className='contact-heading'>Let's build something that ships.</h1>
      <p className="contact-sub">Seeking SDE I / Backend Engineer roles · Mumbai · Pune · Remote · Available May 2026</p>

      <div className='contact-cards'>
        <div className='contact-card'>
          <FaEnvelope className='contact-icon'/>
          <h3>Email</h3>
          <p>snehapoojary2004@gmail.com</p>
          <a href="mailto:snehapoojary2004@gmail.com">Email Me</a>
        </div>
        <div className='contact-card'>
          <FaLinkedin className='contact-icon'/>
          <h3>LinkedIn</h3>
          <p>in/snehapoojary20</p>
          <a href='https://www.linkedin.com/in/snehapoojary20/' target="_blank" rel="noopener noreferrer">Connect</a>
        </div>
        <div className='contact-card'>
          <FaGithub className='contact-icon'/>
          <h3>GitHub</h3>
          <p>SnehaPoojary20</p>
          <a href='https://github.com/SnehaPoojary20' target="_blank" rel="noopener noreferrer">View Repos</a>
        </div>
        <div className='contact-card'>
          <SiLeetcode className='contact-icon'/>
          <h3>LeetCode</h3>
          <p>SnehaPoojary__</p>
          <a href='https://leetcode.com/u/SnehaPoojary__/' target="_blank" rel="noopener noreferrer">200+ Solved</a>
        </div>
        <div className='contact-card'>
          <FaCode className='contact-icon'/>
          <h3>HackerRank</h3>
          <p>snehapoojary2004</p>
          <a href='https://www.hackerrank.com/profile/snehapoojary2004' target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
        <div className='contact-card'>
          <SiGeeksforgeeks className='contact-icon'/>
          <h3>GeeksForGeeks</h3>
          <p>snehapoojary</p>
          <a href='https://www.geeksforgeeks.org/profile/snehapoojary?tab=activity' target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
        <div className='contact-card'>
          <SiHashnode className='contact-icon'/>
          <h3>Technical Blog</h3>
          <p>@snehapoojary</p>
          <a href='https://hashnode.com/@snehapoojary' target="_blank" rel="noopener noreferrer">Read on Hashnode</a>
        </div>
        <div className='contact-card'>
          <FaMapMarkerAlt className='contact-icon'/>
          <h3>Location</h3>
          <p>Mumbai, Maharashtra</p>
          <span className="contact-open">Open to Remote</span>
        </div>
        <div className='contact-card'>
          <FaFileAlt className='contact-icon'/>
          <h3>Resume</h3>
          <p>Full PDF available</p>
          <a href='https://drive.google.com/file/d/19CHkb1HVqLKDENXDXriFsLuS4kCQvTQz/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


