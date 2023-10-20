import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink
import "../styles/Navbar.css";

function Navbar() {

  return (
    <div className="navbar">
      <div className="links">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="experiences"
          smooth={true}
          duration={500}
        >
          Experiences
        </ScrollLink>
      </div>
    </div>
  );
}

export default Navbar;