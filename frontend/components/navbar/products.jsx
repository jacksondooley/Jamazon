import React from "react";
import ProductView from "./show_product";

class allProducts extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchProducts(this.props.category)
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.props.fetchProducts(this.props.category)
        }
    }




    render() {

        const capitalize = (string = "") => {
            if (string === "") {
                return 'All Products'
            } else {
                return string.charAt(0).toUpperCase() + string.slice(1)
            }
        }

        return (
            <div className="product-page">
                <div className="product-count">
                    {this.props.products.length} Results for {capitalize(this.props.category)}
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