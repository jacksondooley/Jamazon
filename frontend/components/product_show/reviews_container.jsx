import { connect } from "react-redux";
import { showProduct } from "../../action/product_actions";
import { deleteReview } from "../../action/review_actions";
import Reviews from "./reviews";


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUserId: state.session.id,
        // avg_rating: state.entities.product[0].avg_rating,
        // review_count: state.entities.product[0].review_count
        reviews: state.entities.reviews
    })
}


const mapDispatchToProps = dispatch => ({
    showProduct: (productId) => dispatch(showProduct(productId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)