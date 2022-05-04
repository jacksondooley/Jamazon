import React from "react";
import { Link } from "react-router-dom";

const Reviews = (props) => (
    <div>
        <div>
            <h3>Customer reviews</h3>
            <div>
                <div>
                    Review this product
                </div>
                <div>
                    Share your thoughts with other customers
                </div>
                {console.log(props)}
                <Link to={`products/${props.id}/review`}>
                    <button>Write a customer review</button>
                </Link>
            </div>
        </div>
        <ul>
            {props.reviews.map(review => (
                <li>
                    <div>
                        Author
                    </div>
                    <div>
                        {review.rating}{review.title}
                    </div>
                    <div>
                        {review.body}
                    </div>
                </li>
            ))}
        </ul>
    </div>
)


export default Reviews