import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBar from "./navbar/nav_bar";
import Footer from "./footer/footer";
import Splash from "./splash/splash";
import CartContainer from "./cart/cart_container";
import ProductsContainer from "./product_index/products_container";
import NewReviewContainer from "./reviews/new_review_container";
import show_product_container from "./product_show/show_product_container";
import Checkout from "./cart/checkout";


const App = () => {
    const location = useLocation();

    return (
    <>
        <header>
            {location.pathname == '/login' || location.pathname == '/signup' ? null : <NavBar />}
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/cart/checkout" component={Checkout}/>
            <ProtectedRoute exact path="/products/:id/review/:crud" component={NewReviewContainer} />            
            <Route path="/products/:id" component={show_product_container} />
            <Route exact path="/products" component={ProductsContainer}/>
            <Route path="/:category" component={ProductsContainer} />
            <Route path="/cart" component={CartContainer} />
            <Route path="/" exact component={Splash} />
        </Switch>
        <footer>
        {location.pathname == '/login' || location.pathname == '/signup' ? null : <Footer />}
        </footer>
    </>
    )
}

export default App;