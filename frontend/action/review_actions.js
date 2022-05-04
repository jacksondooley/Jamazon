import * as ReviewAPIUtil from './../util/reviews_api_util'

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const createReview = (review) => (
  ReviewAPIUtil.createReview(review)
    .then( (review) => dispatch(receiveReview(review)))
)