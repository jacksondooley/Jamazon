import { RECEIVE_ALL_PRODUCTS } from "../action/product_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            action.products.map((product) => (
                newState[product.id] = product
            ))
            return newState
        default:
            return state
    }
}

export default productsReducer