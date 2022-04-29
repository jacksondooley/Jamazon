import React from "react";
import NavBar from "../navbar/nav_bar";
import Footer from "./footer";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import CartContainer from "./cart_container";
import ProductsContainer from "../navbar/products_container";

const Main = () => (
    <div>
        <NavBar />{/* Header */}
        <Switch>
            <Route path="/cart" component={CartContainer} />
            <Route path="/products/books" component={ProductsContainer} />
            {/* <Route path="/electronics" component={Electronics} />
            <Route path="/furniture" component={Furniture} />
            <Route path="/clothes" component={Clothes} />
        <Route path="/jam" component={Jams} /> */}
            <Route path="/products/groceries" component={ProductsContainer} />
            {/* <Route path="/office" component={Office} />
            <Route path="/toysandgames" component={ToysNGames}
        <Route path="/petsupplies" component={PetSupplies} */}
            <Route path="/products" component={ProductsContainer}/>
            <Route path="/" exact component={Splash} />
        </Switch>
        <Footer />{/*  Footer */}
    </div>
)

export default Main