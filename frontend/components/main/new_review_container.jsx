import { connect } from "react-redux";
import NewReview from "./new_review";
import { createReview } from "../../action/review_actions";


const mapStateToProps = (state) => ({
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  reviewAction: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewReview)