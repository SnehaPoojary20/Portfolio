import React from 'react';
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
  return (
    <section className='contact'>
      <h1 className='contact-heading'>Let’s Connect and Build Something Awesome Together!</h1>

      <div className='contact-cards'>
        <div className='contact-card'>
          <FaEnvelope className='contact-icon'/>
          <h3>Email</h3>
          <p>snehapoojary2004@gmail.com</p>
          <a href="mailto:snehapoojary2004@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a>
        </div>

        <div className='contact-card'>
          <FaLinkedin className='contact-icon'/>
          <h3>LinkedIn</h3>
          <p>https://www.linkedin.com/in/snehapoojary20/</p>
          <a href='https://www.linkedin.com/in/snehapoojary20/' target="_blank" rel="noopener noreferrer">Visit Profile</a>
        </div>

        <div className='contact-card'>
          <FaGithub className='contact-icon'/>
          <h3>GitHub</h3>
          <p>https://github.com/SnehaPoojary20</p>
          <a href='https://github.com/SnehaPoojary20' target="_blank" rel="noopener noreferrer">View Repositories</a>
        </div>

        <div className='contact-card'>
          <SiLeetcode className='contact-icon'/>
          <h3>LeetCode</h3>
          <p>https://leetcode.com/u/SnehaPoojary__/</p>
          <a href='https://leetcode.com/u/SnehaPoojary__/' target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>

        <div className='contact-card'>
          <SiGeeksforgeeks className='contact-icon'/>
          <h3>GeeksForGeeks</h3>
          <p>https://www.geeksforgeeks.org/profile/snehapoojary?tab=activity</p>
          <a href='https://www.geeksforgeeks.org/profile/snehapoojary?tab=activity' target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>

        <div className='contact-card'>
          <FaMapMarkerAlt className='contact-icon'/>
          <h3>Location</h3>
          <p>Bhiwandi, Maharashtra, India</p>
        </div>

        <div className='contact-card'>
          <FaFileAlt className='contact-icon'/>
          <h3>Resume</h3>
          <p>Google Docs Link</p>
          <a href='https://drive.google.com/file/d/1P-xg68S5fNXVP5wSMVW5IQLJxKzyba-t/view?usp=drive_link' target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>

        <div className='contact-card'>
          <FaFileAlt className='contact-icon'/>
          <h3>Blogs</h3>
          <p>Technical Blogs Link</p>
          <a href='https://hashnode.com/@snehapoojary' target="_blank" rel="noopener noreferrer">View Blogs</a>
        </div>

      </div>
    </section>
  )
}

export default Contact;

