import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

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
            starsArr.push(<BsStarHalf />)
            fullStars = 0
        }
    }
    return starsArr
}



const ProductView = (props) => (
    <li className="product-item">
        <div className="img">Image PlaceHolder</div>
        <h5>
            {props.product.name}    
        </h5>
        <div className="product-rating">
            {ratingStars(props.product.rating)}
        </div>
        <div>
            <div>$</div>{props.product.price}
        </div>
    </li>
)
export default ProductView