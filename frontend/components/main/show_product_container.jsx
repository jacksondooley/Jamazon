import { connect } from "react-redux";
import { showProduct } from "../../action/product_actions";
import ShowProduct from "./show_product";


const mapStateToProps = (state, ownProps) => {
    return {
    product: state.entities.products
}
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (productId) => dispatch(showProduct(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct)