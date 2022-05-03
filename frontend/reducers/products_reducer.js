import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../action/product_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default productsReducer