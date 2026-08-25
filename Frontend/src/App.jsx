import Aboutme from './About ME/Aboutme';
import Education from './Education/Education.jsx';
import Projects from './Projects/Projects';
import Certifications from './Certifications/Certifiactions.jsx';
import Skills from './Skills/Skills';
import Achievements from './Achievements/Achievements.jsx';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Aboutme />
      <div className="content">
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}

export default App;