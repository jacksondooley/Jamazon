import React from "react";
import NavBar from "../navbar/nav_bar";
import Footer from "./footer";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import CartContainer from "./cart_container";

const Main = () => (
    <div>
        <NavBar />{/* Header */}
        <Switch>
            <Route path="/cart" component={CartContainer} />
            {/* <Route path="/all" component={All}/>
            <Route path="/books" component={Book} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/furniture" component={Furniture} />
            <Route path="/clothes" component={Clothes} />
            <Route path="/jam" component={Jams} />
            <Route path="/groceries" component={Grocries} />
            <Route path="/office" component={Office} />
            <Route path="/toysandgames" component={ToysNGames}
            <Route path="/petsupplies" component={PetSupplies} */}
            <Route path="/" exact component={Splash} />
        </Switch>
        <Footer />{/*  Footer */}
    </div>
)

export default Main