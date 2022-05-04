import { connect } from "react-redux";
import NewReview from "./new_review";


const mapStateToProps = (state) => ({
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
})

export default connect(null, null)(NewReview)