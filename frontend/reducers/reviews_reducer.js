import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../action/review_actions"


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_REVIEW:
            return action.review
        case REMOVE_REVIEW:
            return {review: 'deleted'}
        default:
            return state
    }
}

export default reviewsReducer