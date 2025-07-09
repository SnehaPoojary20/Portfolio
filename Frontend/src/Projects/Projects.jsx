import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { SiSolidity } from "react-icons/si";
import { SiIpfs } from "react-icons/si";

const Projects = () => {
  return (
    <div className='projects'>

      <h1>Featured Projects</h1>
       
      <div className="project-card">
  <h3 className="text-2xl font-bold">VoiceOverify – AI Dubbing Tool</h3> <br></br><br></br>
  <h5>  <p className="mt-2 text-gray-700">
    An AI-powered dubbing tool that translates user-uploaded videos into multiple languages using natural-sounding voiceovers.
  </p>
  <p className="mt-2">
    <strong>Tech Stack:</strong> 
    <ul className='tech'>
     <h5>
      <li className='tech'>Frontend: React   <FaReact size={30} />    </li>
      <li className='tech'>Backend: FastAPI  <SiFastapi size={30} /> </li>
      <li className='tech'>AI Integration: Murf API <FaCogs size={30} /> </li>
      <li className='tech'>Database : Firebase  <IoLogoFirebase size={30} /></li>
     </h5>
    </ul>
  </p>
  <a
    href="https://github.com/SnehaPoojary20/VoiceOverify"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-blue-600 hover:underline"
  >
    View GitHub Repo →
  </a></h5>
</div>
  

       
  <div className="project-card">
  <h3 className="text-2xl font-bold">FinTech – AI-Powered Financial Insights & Governance</h3> <br></br><br></br>
  <h5>  <p className="mt-2 text-gray-700">
    A secure web platform that helps users understand and improve their personal financial habits while monitoring abnormal fintech data behavior. It ensures transparent data-sharing governance through DAO-based consent management.
  </p>
  <p className="mt-2">
    <strong>Tech Stack:</strong> 
    <ul className='tech'>
     <h5>
      <li className='tech'>Frontend: React   <FaReact size={30} />    </li>
      <li className='tech'>Backend: FastAPI  <SiFastapi size={30} /> </li>
      <li className='tech'>AI Integration: Murf API <FaCogs size={30} /> </li>
      <li className='tech'>Database : Firebase  <IoLogoFirebase size={30} /></li>
     </h5>
    </ul>
  </p>
  <a
    href="https://github.com/SnehaPoojary20/FinTech"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-blue-600 hover:underline"
  >
   View GitHub Repo →
  </a></h5>
</div>
  <br></br><br></br>

      
       
      <div className="project-card">
  <h3 className="text-2xl font-bold">CookSafe – Blockchain-based Kitchen Hygiene Monitoring</h3> <br></br><br></br>
  <h5>  <p className="mt-2 text-gray-700">
    An intelligent computer vision system that identifies unhygienic cooking practices using YOLOv8 and logs violations on-chain via smart contracts. Enables community-led hygiene governance using DAO principles.
  </p>
  <p className="mt-2">
    <strong>Tech Stack:</strong> 
    <ul className='tech'>
     <h5>
      <li className='tech'>Frontend: React   <FaReact  size={30} />    </li>
      <li className='tech'>Backend: FastAPI  <SiFastapi size={30} /> , YOLOv8 <AiOutlineEye size={30} /> ,Solidity (Polygon Mumbai)<SiSolidity size={30} title="Solidity" />, IPFS / Arweave <SiIpfs/></li>
      <li className='tech'>Database : Firebase  <IoLogoFirebase /></li>
     </h5>
    </ul>
  </p>
  <a
    href="https://github.com/SnehaPoojary20/CookSafe.git"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-blue-600 hover:underline"
  >
    View GitHub Repo →
  </a></h5>
</div>
  <br></br><br></br>


      <div className='github-calendar'>
         <h1 className="text-2xl font-bold mb-4">GitHub Contribution Heatmap</h1>
          <GitHubCalendar username="snehapoojary20" />
      <br></br><br></br>
      <img
  src="https://github-readme-stats.vercel.app/api?username=snehapoojary&show_icons=true&theme=radical"
/>
<br></br><br></br>
<img
  src="https://github-readme-stats.vercel.app/api/top-langs/?username=snehapoojary&layout=compact&theme=radical"
/>

      </div>
    </div>
  )
}

export default Projects
