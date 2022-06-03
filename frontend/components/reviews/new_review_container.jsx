import { connect } from "react-redux";
import { createReview } from "../../action/review_actions";
import ReviewForm from "./review_form";


const mapStateToProps = (state) => ({
  userId: state.session.id,
  products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
  reviewAction: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)