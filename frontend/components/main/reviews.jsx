import React from "react";
import { Link } from "react-router-dom";
import Review from "./review";



class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

    <div className="reviews">
        <div className="reviews-left">
            <h3>Customer reviews</h3>
            <div>
                <div>
                    Review this product
                </div>
                <div>
                    Share your thoughts with other customers
                </div>
                {console.log(this.props)}
                <Link to={`/products/${this.props?.id}/review/new`}>
                    <button>Write a customer review</button>
                </Link>
            </div>
        </div>
        <ul>
            {this.props.reviews?.map(review => (
                <Review 
                    review={review} 
                    deleteReview={this.props.deleteReview}
                    currentUserId={this.props.currentUserId}
                />
            ))}
        </ul>
    </div>

        )
    }

}


export default Reviews