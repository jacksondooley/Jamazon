import { connect } from "react-redux";
import { deleteReview } from "../../action/review_actions";
import Reviews from "./reviews";


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUserId: state.session.id,
        // avg_rating: state.entities.product[0].avg_rating,
        // review_count: state.entities.product[0].review_count
        // reviews: ownProps.reviews
    })
}


const mapDispatchToProps = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)