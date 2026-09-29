import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import AboutMe from "./About ME/Aboutme.jsx";
import Skills from "./Skills/Skills.jsx";
import Blogs from "./Blogs/Blogs.jsx";
import CodingPlatforms from "./Coding Profiles/Coding.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects/Projects.jsx";
import Certifications from "./Certifications/Certifiactions.jsx";

const Placeholder = ({ title }) => (
  <h2 style={{ paddingTop: 160, textAlign: "center", fontStyle: "italic" }}>
    {title}
  </h2>
);

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coding-platforms" element={<CodingPlatforms />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/certificates" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
