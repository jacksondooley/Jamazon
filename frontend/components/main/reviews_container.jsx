import { connect } from "react-redux";
import Reviews from "./reviews";
import { deleteReview } from "../../action/review_actions";


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return ({
        currentUserId: state.session.id,
        // id: ownProps.match.params.id,
        // reviews: ownProps.reviews
    })
}


const mapDispatchToProps = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)