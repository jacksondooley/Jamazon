import { connect } from "react-redux";
import { removeItem } from "../../action/cart_actions";
import Cart from "./cart";

const mapStateToProps = state => ({
  items: Object.values(state.entities.cart)
})

const mapDispatchToProps = dispatch => ({
  removeItem: (userId, productId) => dispatch(removeItem(userId, productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)