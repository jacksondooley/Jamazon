import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from "../action/review_actions"


const reviewsReducer = (state = [], action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            // const stateArr1 = Object.values(newState)
            // console.log(action.review)
            // stateArr1.push(action.review)
            // console.log(stateArr1)
            return action.review.reviews
        case REMOVE_REVIEW:
            const stateArr2 = Object.values(newState)
            let updatedState = stateArr2.filter(review => review.id !== action.reviewId)
            return updatedState
        default:
            return state
    }
}

export default reviewsReducer