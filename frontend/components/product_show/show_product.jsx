import React from "react";
import Reviews from "./reviews";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { FaLock } from 'react-icons/fa'
import ReviewsContainer from "./reviews_container";

class ShowProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1
        }

        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }


    ratingStars = (rating) => {
        let fullStars = rating

        const starsArr = []
        for (let stars = 0; stars < 5; stars++) {
            if (fullStars >= 1) {
                starsArr.push(<BsStarFill key={stars}/>)
                fullStars -= 1
            } else if (fullStars == 0) {
                starsArr.push(<BsStar key={stars}/>)
            } else {
                if (fullStars < 0.3) {
                    starsArr.push(<BsStar key={stars}/>)
                }
                else if (fullStars > 0.7) {
                    starsArr.push(<BsStarFill key={stars}/>)
                }
                else {
                    starsArr.push(<BsStarHalf key={stars}/>)
                }
                fullStars = 0
            }
        }
        return starsArr
    }

    getFreeDeliveryDate = () => {
        const deliveryDate = new Date()
        deliveryDate.setDate(deliveryDate.getDate() + 6)
        return deliveryDate.toDateString().slice(0, 10)
    }

    getFastDeliveryDate = () => {
        let deliveryDate = new Date()
        deliveryDate.setDate(deliveryDate.getDate() + 3)
        return deliveryDate.toDateString().slice(0, 10)
    }

    getOrderBeforeTime = () => {
        const today = new Date()
        let time = `${23- today.getHours()} hrs and ${59 - today.getMinutes()} mins.`
        return time
    }   

    getReturnDate = () => {
        const deliveryDate = new Date()
        deliveryDate.setDate(deliveryDate.getDate() + 60)
        return deliveryDate.toDateString().slice(0, 10)
    }

    handleAdd = (e) => {
        e.preventDefault()
        this.props.addItem(this.props.userId ,this.props.match.params.id, this.state.qty)
        console.log(this.props.userId)
        this.setState({ qty: 1})
    }


    render() {
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
                        <div className="show-product-cart-inner">

                            <div className="show-price">
                                ${this.props.product?.price}
                            </div>
                            <div className="show-delivery-free">
                                Free Delivery:
                                <span>
                                    {this.getFreeDeliveryDate()}
                                </span>
                            </div>
                            <div className="show-delivery-fast">
                                <span className="show-delivery-text">
                                    Fastest Delivery
                                </span>
                                <span className="show-delivery-date">
                                    {this.getFastDeliveryDate()}.
                                </span>
                                <span className="show-delivery-order">
                                    Order within
                                </span>
                                <span className="show-delivery-time">
                                    {this.getOrderBeforeTime()}
                                </span>
                            </div>
                            <div className="show-stock">
                                In Stock.
                            </div>
                            <div className="show-form">
                                <form action="" onSubmit={this.handleAdd}>
                                    <label htmlFor="">
                                        Qty
                                        <select name="qty" id="qty" onChange={((e) =>this.setState({ qty: e.target.value}))} value={this.state.qty}>
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
                                    <div className="show-button-container">
                                        <input type="submit" className="button4" value="Add to Cart"/>
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="show-button-container">
                                <button className="button3" >Buy Now</button>
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
                            <div className="show-return-container">
                                <span className="show-return-policy">
                                    Return Policy:
                                </span>
                                <span className="show-return-date">
                                    Returnable until {this.getReturnDate()}
                                </span>
                            </div>
                        </div>
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