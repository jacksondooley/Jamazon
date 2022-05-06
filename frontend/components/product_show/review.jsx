import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

const ratingStars = (rating) => {
    let fullStars = rating

    const starsArr = []
    for (let stars = 0; stars < 5; stars++) {
        if (fullStars > 1) {
            starsArr.push(<BsStarFill key={stars}/>)
            fullStars -= 1
        } else {
            starsArr.push(<BsStar key={stars}/>)
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
            <div className="review-profile">
                <div className="review-profile-pic">
                    <CgProfile/>
                </div>
                <div>
                    {props.review.user?.name}
                </div>
            </div>
            <div className="review-header">
                <div className="stars">
                    {ratingStars(props.review.rating)}
                </div>
                <div className="review-title">
                    {props.review.title}
                </div>
            </div>
            <div className="review-date">
                Reviewed on {formatDate(props.review.created_at)}
            </div>
            <div className="review-purchase">
                Verified Purchase
            </div>
            <div>
                {props.review.body}
            </div>
            {props.review.user.id === props.currentUserId ? <div className="review-buttons">
                <button className="button2">
                    Edit Review
                </button>
                <button onClick={(() => props.deleteReview(props.review.id))} className="button2">
                    Delete
                </button>
            </div> : <div></div>}
        </li>
    )
}

export default Review