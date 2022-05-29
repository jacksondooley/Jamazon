import { RECEIVE_REVIEWS, REMOVE_REVIEW } from "../action/review_actions"


const reviewsReducer = (state = [], action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW:
            return action.reviews
        default:
            return state
    }
}

export default reviewsReducer