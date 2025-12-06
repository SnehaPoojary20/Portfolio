import React from "react";
import "./Skills.css";

import { SiJavascript, SiRedux, SiMongodb, SiFastapi, SiPostman } from "react-icons/si";
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGit, FaGithub, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <DiMysql /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> }
];

const SkillsWheel = () => {
  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      <div className="wheel-container">
      <div className="wheel">
        {skills.map((skill, index) => (
          <div key={index} className={`skill pos-${index}`}>
            <span className="skill-icon">{skill.icon}</span><br></br>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SkillsWheel;




