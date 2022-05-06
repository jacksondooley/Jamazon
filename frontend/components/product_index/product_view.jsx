import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { Link } from "react-router-dom"

const ratingStars = (rating) => {
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

const getDeliveryDate = () => {
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 6)
    return deliveryDate
}



const ProductView = (props) => (
    <li className="product-item">
        <Link to={`/products/${props.product.id}`}>
            <div className="img">
                <img src={`${props.product.photoUrl}`} alt="" />
            </div>
            <h5 className="product-title">
                {props.product.name}  
            </h5>
            <div className="product-rating-container">
                <span className="product-rating">
                    {ratingStars(props.product.avg_rating)}
                </span>
                <span className="product-review-count">
                    {props.product.review_count}
                </span>
            </div>
            <div className="product-price">
                <div className="product-price-sign">
                    $
                </div>
                <div className="product-price-dollars">
                    {props.product.price.split(".")[0]}
                </div>
                <div className="product-price-cents">
                    {props.product.price.split(".")[1]}
                </div>
            </div>
            <div className="product-delivery">
               <span>
                   Get it as soon as
                </span>
                <span className="product-delivery-date">
                   {getDeliveryDate().toDateString().slice(0, 10)}
                </span> 
            </div>
            <div>
                FREE Shipping on orders over $25
            </div>
        </Link>
    </li>
)
export default ProductView