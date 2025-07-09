import React from 'react';
import './Skills.css';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="skills">
        <h1>The Tools I Use to Build & Innovate - Languages, Frameworks, & Beyond</h1>
     <div className='languages'>

        <h1>Languages</h1>

      <div className="icon-tooltip">
        <FaJava size={30} />
        <span className="tooltip-text">Java</span>
      </div>
        
         <div className="icon-tooltip">
        <SiJavascript size={30} />
        <span className="tooltip-text">JavaScript</span>
      </div>

      <div className="icon-tooltip">
        <FaPython size={30} />
        <span className="tooltip-text">Python</span>
      </div>
    

     <h1 className='frontend'>Frontend</h1>

        <div className="icon-tooltip">
        <FaHtml5  size={30} />
        <span className="tooltip-text">HTML</span>
      </div>

        <div className="icon-tooltip">
        <FaCss3 size={30} />
        <span className="tooltip-text">CSS</span>
      </div>

        <div className="icon-tooltip">
        <SiJavascript size={30} />
        <span className="tooltip-text">JavaScript</span>
      </div>

        <div className="icon-tooltip">
        <FaBootstrap size={30} />
        <span className="tooltip-text">Bootstrap</span>
      </div>

        <div className="icon-tooltip">
        <RiTailwindCssFill size={30} />
        <span className="tooltip-text">Tailwind CSS</span>
      </div>

        <div className="icon-tooltip">
        <FaReact  size={30} />
        <span className="tooltip-text">React</span>
      </div>

        <div className="icon-tooltip">
        <SiRedux size={30} />
        <span className="tooltip-text">Redux</span>
      </div>

        <div className="icon-tooltip">
        <RiNextjsFill size={30} />
        <span className="tooltip-text">Next.js</span>
      </div>

    <h1>Backend</h1>

    <div className="icon-tooltip">
        <FaNodeJs size={30} />
        <span className="tooltip-text">Node.js</span>
      </div>

    <div className="icon-tooltip">
        < FaServer size={30} />
        <span className="tooltip-text">Express.js</span>
      </div>

    <div className="icon-tooltip">
        < SiMongodb size={30} />
        <span className="tooltip-text">MongoDB</span>
      </div>

    <div className="icon-tooltip">
        <FaDatabase size={30} />
        <span className="tooltip-text">Moongoose</span>
      </div>

    <div className="icon-tooltip">
        <DiMysql size={30} />
        <span className="tooltip-text">SQL</span>
      </div>

    <div className="icon-tooltip">
        <SiFastapi size={30} />
        <span className="tooltip-text">Fastapi</span>
      </div>

      {/* Add more skills similarly */}

       <h1>Tools</h1>

        <div className="icon-tooltip">
        <FaGit size={30} />
        <span className="tooltip-text">Git</span>
      </div>

        <div className="icon-tooltip">
        <FaGithub size={30} />
        <span className="tooltip-text">Github</span>
      </div>

        <div className="icon-tooltip">
        <VscVscode size={30} />
        <span className="tooltip-text">VS Code</span>
      </div>

      <h1>Other Skills</h1>
      <br></br>
        <h4>(RESTful APIs, MVC, MVT, NLP, Blockchain, Yolo
        )</h4>
    </div>
     </div>
  );
};

export default Skills;
