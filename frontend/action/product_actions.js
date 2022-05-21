import * as ProductAPIUtil from './../util/products_api_util'
import { receiveReviews } from './review_actions'


export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const indexCategoryProducts = (category) => dispatch => (
    ProductAPIUtil.indexCategoryProducts(category)
        .then( (products) => dispatch(receiveAllProducts(products)))
)

export const showProduct = (productId) => dispatch => (
    ProductAPIUtil.showProduct(productId)
        .then( (res) => {
            dispatch(receiveProduct(res))
            dispatch(receiveReviews(res.reviews))
        })
)

