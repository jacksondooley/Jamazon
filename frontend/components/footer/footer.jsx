import React from "react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Footer = () => (
  <footer>
    <div className="footer-top">
      <div className="github">
        <a href="https://github.com/jacksondooley" target="_blank">
          <IconContext.Provider value={{ size: "40px" }}>
            <BsGithub />
          </IconContext.Provider>
        </a>
      </div>
      <div className="linkedin">
        <a href="https://linkedin.com/" target="_blank">
          <IconContext.Provider value={{ size: "40px" }}>
            <BsLinkedin />
          </IconContext.Provider>
        </a>
      </div>
    </div>
    <div className="footer-bottom">Jamazon by Jackson Dooley</div>
  </footer>
)

export default Footer