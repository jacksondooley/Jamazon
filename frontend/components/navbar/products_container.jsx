import { connect } from "react-redux";
import { showAllProducts } from "../../action/product_actions";
import Products from "./Products";


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(showAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)