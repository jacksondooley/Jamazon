import { connect } from "react-redux";
import { createReview } from "../../action/review_actions";
import ReviewForm from "./review_form";


const mapStateToProps = (state) => ({
  userId: state.session.id,
  product: state.entities.products[0]
})

const mapDispatchToProps = dispatch => ({
  reviewAction: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)