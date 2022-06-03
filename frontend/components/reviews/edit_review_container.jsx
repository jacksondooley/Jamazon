import { connect } from "react-redux";
import { createReview } from "../../action/review_actions";
import ReviewForm from "./review_form";


const mapStateToProps = (state) => ({
  userId: state.session.id,
  product: Object.values(state.entities.products),
  review: {
    user_id: this.props.userId,
    product_id: this.props.match.params.id,
    rating: 0,
    title: "",
    body: ""
  }
})

const mapDispatchToProps = dispatch => ({
  reviewAction: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)