import { connect } from "react-redux";
import { indexCategoryProducts } from "../../action/product_actions";
import products from "./products";



const mapStateToProps = (state, ownProps) => {
    return {
    category: ownProps.match.params.category,
    products: Object.values(state.entities.products)
}
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(indexCategoryProducts(categoryType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(products)