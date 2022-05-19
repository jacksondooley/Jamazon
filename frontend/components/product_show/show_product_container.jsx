import { connect } from "react-redux";
import { addItem } from "../../action/cart_actions";
import { showProduct } from "../../action/product_actions";
import ShowProduct from "./show_product";


const mapStateToProps = (state, ownProps) => {
    return {
    product: state.entities.products[0],
    userId: state.session.id
}
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (productId) => dispatch(showProduct(productId)),
    addItem: (userId, productId, quantity) => dispatch(addItem(userId, productId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct)