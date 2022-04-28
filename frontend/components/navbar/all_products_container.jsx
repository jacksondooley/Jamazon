import { connect } from "react-redux";
import { showAllProducts } from "../../action/product_actions";
import allProducts from "./all_products";


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products),
    categoryType: 'All'
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(showAllProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(allProducts)