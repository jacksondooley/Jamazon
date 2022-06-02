import { connect } from "react-redux";
import { indexCategoryProducts } from "../../action/product_actions";
import searchProducts from "./search_products";



const mapStateToProps = (state, ownProps) => {
    return {
    category: "search",
    products: Object.values(state.entities.products)
}
}

// const mapDispatchToProps = dispatch => ({
//     fetchProducts: (categoryType) => dispatch(indexCategoryProducts(categoryType)),
// })

export default connect(mapStateToProps, null)(searchProducts)