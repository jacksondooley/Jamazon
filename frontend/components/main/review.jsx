import React from "react";
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
        }
    }
    return starsArr
}

const Review = (props) => (
    <li>
        <div>
            <CgProfile/>
            {props.review.user?.name}
        </div>
        <div>
            {ratingStars(props.review.rating)}{props.review.title}
        </div>
        <div>
            {props.review.body}
        </div>
        <div>
            <button>
                Edit
            </button>
            <button onClick={(() => props.deleteReview(props.review.id))}>
                Delete
            </button>
        </div>
    </li>
)

export default Review