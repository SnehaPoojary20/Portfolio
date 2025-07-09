import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar';
import Aboutme from './About ME/Aboutme';
import Projects from './Projects/Projects';
import Achievements from './Achievements/Achievements';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

 

function App() {
    return (
      <>
        <Router>
            <Navbar/>
          <Routes>
             <Route path="/" element={<Aboutme />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<Projects />} />
             <Route path="/achievements" element={< Achievements/>} />
             <Route path="/skills" element={< Skills/>} />
             <Route path="/experience" element={< Experience/>} />
             
         </Routes>
        </Router>
      </>
    )};

export default App;