import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import Review from "./review";




class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    ratingStars = (rating) => {
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
                    starsArr.push(<BsStar/>)
                }
                else if (fullStars > 0.7) {
                    starsArr.push(<BsStarFill />)
                }   
                else {
                    starsArr.push(<BsStarHalf/>)
                } 
                fullStars = 0
            }
        }
        return starsArr
    }

    starCount() {
        
    }

    render() {
        return (

    <div className="reviews">
        <div className="reviews-left">
            <h3>Customer reviews</h3>
            <div>
                {this.ratingStars(this.props?.avg_rating)}
                <div>
                {Math.round(this.props?.avg_rating * 10) / 10} out of 5
                </div>
            </div>
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