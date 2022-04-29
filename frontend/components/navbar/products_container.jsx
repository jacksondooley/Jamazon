import { connect } from "react-redux";
import { showCategoryProducts } from "../../action/product_actions";
import products from "./products";



const mapStateToProps = (state, ownProps) => ({
    url: ownProps.match.url,
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(showCategoryProducts(categoryType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(products)