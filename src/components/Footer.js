import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  const githubURL = "https://github.com/will8889";
  const linkedinURL = "https://www.linkedin.com/in/william-lucianto-santoso";

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>williamluciantos@gmail.com</p>
      <p> &copy; 2023 williamls-portfolio.com - created with ReactJS</p>
    </div>
  );
}

export default Footer;