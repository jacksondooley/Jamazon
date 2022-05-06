import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SearchBarContainer from "./search_bar/search_bar_container";
import ShoppingCartContainer from "./shopping_cart/shopping_cart_container";
import { Link } from "react-router-dom";

const NavBelt = () => (
    <div className="nav-belt">
        <div className="logo-padding">  
            <Link to="/">
                <img className="logo" src="https://jamazon-seeds.s3.amazonaws.com/jamzon_logo.png" />
            </Link>
        </div>
            <SearchBarContainer />
        <div className="greeting-padding">
            <GreetingContainer />
        </div>
        <div className="shopping-cart-padding">
            <Link to="/cart">
                <ShoppingCartContainer />
            </Link>
        </div>
        
    </div>
)

export default NavBelt