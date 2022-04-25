import React from "react";
import GreetingContainer from "../greeting_container";
import SearchBarContainer from "./search_bar_container";
import ShoppingCartContainer from "./shopping_cart_container";

const NavBelt = () => (
    <div className="nav-belt">
        <h1>Jamazon Logo Placeholder</h1>
        <SearchBarContainer />
        <GreetingContainer />
        <ShoppingCartContainer />
    </div>
)

export default NavBelt