import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="greeting">
            <Link to="/login"><span>Login</span></Link>
            <span> or </span>
            <Link to="/signup"><span>Signup</span></Link>
        </div>
    )

    const personalGreeting = () => (
        <div className="greeting">
            <div>{`Hello, ${currentUser.name}`}</div>
            <button onClick={logout}>Logout</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}
export default Greeting