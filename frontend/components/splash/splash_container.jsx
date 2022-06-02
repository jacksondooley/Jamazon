import { connect } from "react-redux";
import { indexCategoryProducts } from "../../action/product_actions";
import splash from "./splash";

const mapStateToProps = (state, ownProps) => {
    return {
    products: Object.values(state.entities.products)
}
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: (categoryType) => dispatch(indexCategoryProducts(categoryType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(splash)