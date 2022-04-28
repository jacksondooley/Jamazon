import { RECEIVE_ALL_PRODUCTS } from "../action/product_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export default productsReducer