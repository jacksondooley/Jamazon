import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const DemoUser = (props) => {

  return (
    <div>
        <button className="button" onClick={() => props.handleStartDemo()}>
          Demo User
        </button>
    </div>
  )
}

export default DemoUser