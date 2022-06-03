import { RECEIVE_REVIEWS, REMOVE_REVIEW } from "../action/review_actions"


const reviewsReducer = (state = [], action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW:
            const stateArr = Object.values(newState)
            let updatedState = stateArr.filter(review => review.id !== action.reviewId)
            return updatedState
        default:
            return state
    }
}

export default reviewsReducer