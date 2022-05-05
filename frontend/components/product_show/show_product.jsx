import React from "react";
import Reviews from "./reviews";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { FaLock } from 'react-icons/fa'
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
                        <div className="show-product-rating">
                            <div className="stars">
                                {this.ratingStars(this.props.product?.avg_rating)} 
                            </div>
                            <div className="show-product-ratings">
                                {this.props.product?.review_count} ratings
                            </div>
                        </div>
                        <div className="show-product-price-container">
                            <div className="show-product-price-label">
                                Price: 
                            </div>
                            <div className="show-product-price">
                                ${this.props.product?.price}
                            </div>
                            
                        </div>
                        <h2>About this item</h2>
                        {this.props.product?.description}
                    </div>
                    <div className="show-product-cart">
                        <div className="show-price">
                            ${this.props.product?.price}
                        </div>
                        <div className="show-delivery-free">
                            Free Delivery:
                        </div>
                        <div className="show-delivery-fast">
                            Fastest Delivery:
                        </div>
                        <div className="show-stock">
                            In Stock.
                        </div>
                        <div>
                            <form action="">

                            </form>
                            <label htmlFor="">
                                Qty
                                <select name="qty" id="qty" value="qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </label>
                            <button className="button3">Buy Now</button>
                            <button className="button4">Add to Cart</button>
                        </div>
                        <div className="secure-transaction">
                            <div className="secure-transaction-icon">
                                <FaLock />
                            </div>
                            <div className="secure-transaction-text">
                                Secure Transaction
                            </div>
                        </div>
                        <div className="show-ship-container">
                            <div>
                                Ships from
                            </div>
                            <div className="show-jamazon">
                                Jamazon.com
                            </div>
                        </div>
                        <div className="show-sold-container">
                            <div>
                                Sold by
                            </div>
                            <div className="show-jamazon">
                                Jamazon.com
                            </div>
                        </div>
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