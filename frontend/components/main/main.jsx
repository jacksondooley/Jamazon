import React from "react";
import NavBar from "../navbar/nav_bar";
import Footer from "./footer";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import CartContainer from "./cart_container";
import ProductsContainer from "../navbar/products_container";

const Main = () => (
    <div>
        <NavBar />
        <Switch>
            <Route path="/cart" component={CartContainer} />
            <Route path="/products/:category" component={ProductsContainer} />
            <Route path="/products" component={ProductsContainer}/>
            <Route path="/" exact component={Splash} />
        </Switch>
        <Footer />
    </div>
)

export default Main