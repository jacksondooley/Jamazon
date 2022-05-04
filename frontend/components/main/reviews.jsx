import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

const ratingStars = (rating) => {
    let fullStars = rating

    const starsArr = []
    for (let stars = 0; stars < 5; stars++) {
        if (fullStars > 1) {
            starsArr.push(<BsStarFill />)
            fullStars -= 1
        } else if (fullStars == 0) {
            starsArr.push(<BsStar />)
        } else {
            if (fullStars < 0.3) {
                starsArr.push(<BsStar />)
            }
            else if (fullStars > 0.7) {
                starsArr.push(<BsStarFill />)
            }
            else {
                starsArr.push(<BsStarHalf />)
            }
            fullStars = 0
        }
    }
    return starsArr
}

const Reviews = (props) => (

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
                <Link to={`/products/${props.id}/review/new`}>
                    <button>Write a customer review</button>
                </Link>
            </div>
        </div>
        <ul>
            {props.reviews.map(review => (
                <li>
                    <div>
                        <CgProfile/>
                        Author: {console.log(review)}
                    </div>
                    <div>
                        {ratingStars(review.rating)}{review.title}
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