import { RECEIVE_PRODUCT, REMOVE_PRODUCT, REMOVE_PRODUCTS, RECEIVE_CART  } from "../action/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CART:
      return action.cart.cart
    default:
      return state
  }
}

export default cartReducer