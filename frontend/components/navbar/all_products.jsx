import React from "react";
import ProductView from "./show_product";

class allProducts extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.products.length} Results for {this.props.categoryType} Products
                </div>
                <ul>
                    {this.props.products.map((product) => (
                        <ProductView product={product}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default allProducts