import React from 'react';
import "./Experience.css";

const Experience = () => {
  return (
    <div className='experience'>
      <h1>My Journey So Far</h1>
      <h1>Hackathons</h1>
      <br></br><br></br>
      <h3>🏆 Finalist (Frontend Shortlist) – Outlier AI CodeCircuit Hackathon  
🗓️ May 23, 2025 </h3>
          <h5> <ul>
            <li>Selected among top participants for frontend role based on performance in technical round.  </li><br></br>
            <li>Demonstrated skills in React, UI/UX design, and component-based architecture.</li>
           <img src="./outlier.png" alt="outlier" className='email' />

          </ul></h5>


      <h3> 💻 Participant – Level Up: Vibe Coding Hackathon  
🗓️ May 2025 </h3>
     
<h5>
<ul>
    <li> Built an AI-powered Instagram clone with an auto-caption generator using React, Node.js, and NLP APIs.  </li><br></br>
    <li> Collaborated in a team of 3, completed the MVP in 48 hours.</li>
</ul>
  </h5>
<br></br>

<h3>🏆 Finalist – Web3 Hygiene DAO Hackathon(AI Summit Hackathon 2025)
    🗓️ June 2025</h3>
  <h5>  
   <ul>
    <li> Developed Kitchen Hygiene DAO using YOLOv8, FastAPI, React, and Smart Contracts.  
    </li><br></br>
     <li>Enabled decentralized violation logging with IPFS and Polygon Mumbai.</li>
   </ul>
 </h5>

 <h1>Open Source Contributions</h1>
 <br></br>
 <h3>🔧 Open Source Contributor – Sugar Labs  
🗓️ Mar 2025 – Apr 2025</h3>
 <h5> 
    <ul>
        <li> Debugged `Browse Activity` (#987), improved Abacus tutorials (#837).  
</li><br></br>
<li> Proposed and submitted “AI-Powered Debugger for Music Blocks” for GSoC 2025</li>
    </ul>
</h5>
    </div>
  )
}

export default Experience;
