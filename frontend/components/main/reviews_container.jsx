import { connect } from "react-redux";
import Reviews from "./reviews";
import { deleteReview } from "../../action/review_actions";


const mapStateToProps = (state) => ({
    currentUserId: state.session.id
})


const mapDispatchToProps = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)