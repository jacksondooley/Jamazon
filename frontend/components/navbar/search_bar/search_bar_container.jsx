import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {indexSearchProducts } from "../../../action/product_actions";
import SearchBar from "./search_bar";

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(indexSearchProducts(categoryType)),
})

export default withRouter(connect(null, mapDispatchToProps)(SearchBar))