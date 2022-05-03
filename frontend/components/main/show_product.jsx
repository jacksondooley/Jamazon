import React from "react";
import ReviewsContainer from "./reviews_container";

class ShowProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }


    render() {
        console.log(this.props)
        return (
            <>
                <div className="show-product-container">
                    <div>
                        <img src={`${this.props.product.photoUrl}`} alt="" />
                    </div>
                    <div className="show-product-mid">
                        <h1>
                            {this.props.product.name}
                        </h1>
                        {this.props.product.rating}
                        <div>
                            Price: {this.props.product.price}
                        </div>
                        <h2>About this item</h2>
                        {this.props.product.description}
                    </div>
                    <div className="show-product-cart">
                        <div>{this.props.product.price}</div>
                        <div>Free Delivery:</div>
                        <div>Fastest Delivery:</div>
                        <div>Qty</div>
                        <button className="button" value="Add to cart"/>
                        <div>Secure Transaction</div>
                        <div>Ships from</div>
                        <div>Sold by</div>
                        <div>Return Policy</div>
                    </div>
                </div>
                <ReviewsContainer/>
            </>
        )
    }
}

export default ShowProduct