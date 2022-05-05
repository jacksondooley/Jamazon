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
                {console.log(props)}
                <Link to={`/products/${props?.id}/review/new`}>
                    <button>Write a customer review</button>
                </Link>
            </div>
        </div>
        <ul>
            {props?.reviews.map(review => (
                <Review review={review} currentUserId={currentUserId} deleteReview={this.props?.deleteReview}/>
            ))}
        </ul>
    </div>

        )
    }

}


export default Reviews