import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Aboutme from './About ME/Aboutme';
import Projects from './Projects/Projects';
import Certifications from "./Certifications/Certifiactions.jsx"
import Skills from './Skills/Skills';
import Achievements from './Achievements/Achievements.jsx';
import Contact from './Contact/Contact';

 

function App() {
    return (
      <>
       <Aboutme/>
       <div className='content'>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Achievements/>
        <Contact/>
       
        
       </div>

       
      </>
    )};

export default App;