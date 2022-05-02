import { connect } from "react-redux";
// import { showCategoryProducts } from "../../action/product_actions";
import IndexProduct from "./index_product";


const mapStateToProps = (state, ownProps) => {
    return {
    category: ownProps.match.params.category,
    products: Object.values(state.entities.products)
}
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(showCategoryProducts(categoryType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)