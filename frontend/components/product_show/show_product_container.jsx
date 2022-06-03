import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../action/cart_actions";
import { indexCategoryProducts, showProduct } from "../../action/product_actions";
import ShowProduct from "./show_product";


const mapStateToProps = (state, ownProps) => {
    return {
    products: Object.values(state.entities.products),
    userId: state.session.id
}
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(indexCategoryProducts()),
    addItem: (userId, productId, quantity) => dispatch(addItem(userId, productId, quantity))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowProduct))