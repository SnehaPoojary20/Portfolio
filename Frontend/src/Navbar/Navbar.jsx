import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <>
   <div className='navbar'>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
      <div className="container-fluid">
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><b>About Me</b>  </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/projects"><b>Projects</b>  </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/skills"><b>Skills</b>  </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/achievements"><b>Achievements</b>  </Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/experience"><b>Experience</b>  </Link>
            </li>

            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/contact"><b>Contact</b>  </Link>
            </li>


          </ul>

       
        </div>
      </div>
    </nav>
   </div>
   </>
  );
};

export default Navbar;

