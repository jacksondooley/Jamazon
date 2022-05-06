import * as ReviewAPIUtil from './../util/reviews_api_util'

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

// export const fetchReviews = (productId) =>

export const createReview = (review) => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then( (review) => dispatch(receiveReview(review)))
)

export const updateReview = (review) => (
  ReviewAPIUtil.updateReview(review)
    .then( (review) => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then( () => dispatch(removeReview(reviewId)))
)