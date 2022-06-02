import React from "react";
import { connect } from "react-redux";
import {indexSearchProducts } from "../../../action/product_actions";
import SearchBar from "./search_bar";

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(indexSearchProducts(categoryType)),
})

export default connect(null, mapDispatchToProps)(SearchBar)