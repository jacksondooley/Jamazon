import React from "react";
import ProductView from "./show_product";

class allProducts extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchProducts(this.props.url.slice(9))
    }


    render() {
        return (
            <div className="product-page">
                <div className="product-count">
                    {this.props.products.length} Results for {this.props.categoryType} Products
                </div>
                <ul className="product-container">
                    {this.props.products.map((product, idx) => (
                        <ProductView product={product} key={idx}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default allProducts