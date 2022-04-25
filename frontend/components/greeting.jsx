import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div>
            {/* <Link to="/signup">Signup</Link> */}
            <Link to="/login">Login</Link>
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