import { connect } from "react-redux";
import Cart from "./cart";

const mapStateToProps = state => ({
  items: Object.values(state.entities.cart)
})


export default connect(mapStateToProps, null)(Cart)