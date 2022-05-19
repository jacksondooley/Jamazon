import * as cartApiUtil from './../util/cart_api_util'


export const RECEIVE_CART = "RECEIVE_CART" 
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const REMOVE_PRODUCTS = "REMOVE_PRODUCTS"

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
})

export const addProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
})

export const updateProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
})

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
})

export const emptyCart = () => ({
  type: REMOVE_PRODUCTS
})

export const fetchCart = (userId) => dispatch => (
  cartApiUtil.fetchCart(userId)
    .then( (res) => dispatch(receiveCart(res)))
)

export const addItem = (userId, productId, quantity) => dispatch => (
    cartApiUtil.addItem(userId, productId, quantity)
      .then( (res) => dispatch(receiveCart(res)))
)

export const removeItem = (userId, productId) => dispatch => (
  cartApiUtil.removeItem(userId, productId)
    .then( (res) => dispatch(receiveCart(res)))
)

