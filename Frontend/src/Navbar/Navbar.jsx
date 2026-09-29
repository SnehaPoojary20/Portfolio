import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "About Me", to: "/", end: true },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Coding Platforms", to: "/coding-platforms" },
  { label: "Blogs", to: "/blogs" },
  { label: "Certifications", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar-links">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
