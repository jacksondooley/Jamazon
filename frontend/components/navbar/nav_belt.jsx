import React from "react";
import GreetingContainer from "../greeting_container";
import SearchBarContainer from "./search_bar_container";
import ShoppingCartContainer from "./shopping_cart_container";

const NavBelt = () => (
    <div className="nav-belt">
        <div className="logo-padding">  
            <h1 className="logo">Jamazon Logo Placeholder</h1>
        </div>
            <SearchBarContainer />
        <div className="greeting-padding">
            <GreetingContainer />
        </div>
        <div className="shopping-cart-padding">
            <ShoppingCartContainer />
        </div>
        
    </div>
)

export default NavBelt