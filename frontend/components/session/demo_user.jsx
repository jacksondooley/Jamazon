import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const DemoUser = (props) => {

  const startDemo = () => {
    console.log("yes")
  }



  return (
    <div>
      {/* <input className="button" type="button" value="Demo User" /> */}
      <Link to="/login" >
        <button className="button" onClick={() => startDemo()}>
          Demo User
        </button>
      </Link>
      

    </div>
  )
}

export default DemoUser