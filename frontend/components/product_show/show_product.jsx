import React from "react";
import Reviews from "./reviews";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import ReviewsContainer from "./reviews_container";

class ShowProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
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


    render() {
        console.log(this.props)
        return (
            <div>
                <div className="show-product-container">
                    <div className="show-product-img">
                        <img src={`${this.props.product?.photoUrl}`} alt="" />
                    </div>
                    <div className="show-product-mid">
                        <h1>
                            {this.props.product?.name}
                        </h1>
                        <div>
                            <div className="stars">
                                {this.ratingStars(this.props.product?.avg_rating)} 
                            </div>
                            <div>
                                {this.props.product?.review_count} ratings
                            </div>
                        </div>
                        <div>
                            Price: {this.props.product?.price}
                        </div>
                        <h2>About this item</h2>
                        {this.props.product?.description}
                    </div>
                    <div className="show-product-cart">
                        <div>{this.props.product?.price}</div>
                        <div>Free Delivery:</div>
                        <div>Fastest Delivery:</div>
                        <div>Qty</div>
                        <button className="button3">Add to Cart</button>
                        <div>Secure Transaction</div>
                        <div>Ships from</div>
                        <div>Sold by</div>
                        <div>Return Policy</div>
                    </div>
                </div>

                <ReviewsContainer 
                    reviews={this.props.product?.reviews} 
                    id={this.props.match.params.id}
                    avg_rating={this.props.product?.avg_rating}
                    review_count={this.props.product?.review_count}
                />

            </div>
        )
    }
}

export default ShowProduct