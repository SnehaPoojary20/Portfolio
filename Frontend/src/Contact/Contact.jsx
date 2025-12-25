import React from 'react';
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  const email = import.meta.env.VITE_EMAIL;
  const linkedin = import.meta.env.VITE_LINKEDIN;
  const github = import.meta.env.VITE_GITHUB;
  const location = import.meta.env.VITE_LOCATION;
  const resume = import.meta.env.VITE_RESUME;

  return (
    <section className='contact'>
      <h1 className='contact-heading'>Let’s Connect and Build Something Awesome Together!</h1>

      <div className='contact-cards'>
        <div className='contact-card'>
          <FaEnvelope className='contact-icon'/>
          <h3>Email</h3>
          <p>{email}</p>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            Email Me
          </a>
        </div>

        <div className='contact-card'>
          <FaLinkedin className='contact-icon'/>
          <h3>LinkedIn</h3>
          <p>{linkedin}</p>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>

        <div className='contact-card'>
          <FaGithub className='contact-icon'/>
          <h3>GitHub</h3>
          <p>{github}</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            View Repositories
          </a>
        </div>

        <div className='contact-card'>
          <FaMapMarkerAlt className='contact-icon'/>
          <h3>Location</h3>
          <p>{location}</p>
        </div>

        <div className='contact-card'>
          <FaFileAlt className='contact-icon'/>
          <h3>Resume</h3>
          <p>Google Docs</p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
