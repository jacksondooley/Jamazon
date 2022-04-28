import React from "react";

const ProductView = (props) => (
    <li>
        <div>Image PlaceHolder</div>
        <h5>
            {props.product.name}    
        </h5>
        <div>
            {props.product.rating}
        </div>
        <div>
            {props.product.price}
        </div>
    </li>
)
export default ProductView