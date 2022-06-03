import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { indexCategoryProducts } from "../../action/product_actions";
import searchProducts from "./search_products";



const mapStateToProps = (state, ownProps) => {
    return {
    category: ownProps.match.params.query,
    products: Object.values(state.entities.products)
}
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(indexCategoryProducts(categoryType)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchProducts))