import React from "react";
import NavBar from "../navbar/nav_bar";
import Footer from "./footer";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import CartContainer from "./cart_container";
import ProductsContainer from "../navbar/products_container";
import ShowProductContainer from "./show_product_container";
import NewReviewContainer from "./new_review_container";
import { AuthRoute } from "../../util/route_util";

const Main = () => (
    <div>
        <NavBar />
        <Switch>
            <Route path="/cart" component={CartContainer} />
            <Route exact path="/products/:id/review/:crud" component={NewReviewContainer} />            
            <Route path="/products/:id" component={ShowProductContainer} />
            <Route exact path="/products" component={ProductsContainer}/>
            <Route path="/:category" component={ProductsContainer} />
            <Route path="/" exact component={Splash} />
        </Switch>
        <Footer />
    </div>
)

export default Main