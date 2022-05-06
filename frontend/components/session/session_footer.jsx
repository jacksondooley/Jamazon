import React from "react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { Route } from "react-router-dom";

const click = () => {
  // < Route path = '/privacy-policy' component = {() => {
  //   window.location.href = 'https://github.com/jacksondooley';
  //   return null;
  // }}/>
}

const SessionFooter = () => (
  <footer className="session-footer">
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
  </footer>
)

export default SessionFooter