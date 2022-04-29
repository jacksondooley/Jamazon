import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { Link } from "react-router-dom"

const ratingStars = (rating) => {
    let fullStars = Math.floor(rating / 1)
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

const getDeliveryDate = () => {
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 3)
    return deliveryDate
}



const ProductView = (props) => (
    <li className="product-item">
        <Link to={`/products/${props.product.id}`}>
            <div className="img">Image PlaceHolder</div>
            <h5>
                {props.product.name}  
            </h5>
            <div className="product-rating">
                {ratingStars(props.product.rating)}
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
            <div>
               <div>
                   Free Delivery
                </div>
                <div>
                   {getDeliveryDate().toDateString().slice(0, 10)}
                </div> 
            </div>
        </Link>
    </li>
)
export default ProductView