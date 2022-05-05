import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

const ratingStars = (rating) => {
    let fullStars = rating

    const starsArr = []
    for (let stars = 0; stars < 5; stars++) {
        if (fullStars > 1) {
            starsArr.push(<BsStarFill />)
            fullStars -= 1
        } else {
            starsArr.push(<BsStar />)
        }
    }
    return starsArr
}

const formatDate = (date) => {
    const dateArray = new Date(date).toDateString().split(' ')
    const dateString = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    return dateString
}

const Review = (props) => {

    return (
        <li>
            <div>
                <CgProfile/>
                {props.review.user?.name}
            </div>
            <div>
                {ratingStars(props.review.rating)}{props.review.title}
            </div>
            <div>
                Reviewed on {formatDate(props.review.created_at)}
            </div>
            <div>
                Verified Purchase
            </div>
            <div>
                {props.review.body}
            </div>
            {props.review.user.id === props.currentUserId ? <div>
                <button>
                    Edit
                </button>
                <button onClick={(() => props.deleteReview(props.review.id))}>
                    Delete
                </button>
            </div> : <div></div>}
        </li>
    )
}

export default Review