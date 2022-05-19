import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../../action/cart_actions";
import ShoppingCart from "./shopping_cart";

const mapStateToProps = state => ({
  cart: state.entities.cart,
  userId: Object.values(state.entities?.users)[0]?.id
})

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)