import { RECEIVE_REVIEW } from "../action/review_actions"


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_REVIEW:
            return action.review
        default:
            return state
    }
}

export default reviewsReducer