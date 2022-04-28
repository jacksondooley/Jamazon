import * as ProductAPIUtil from './../util/products_api_util'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"

const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const showAllProducts = () => dispatch (
    ProductAPIUtil.showAllProducts()
        .then( (products) => dispatch(receiveAllProducts(products)))
)