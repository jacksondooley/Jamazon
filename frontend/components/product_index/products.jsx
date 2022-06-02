import React from "react";
import ProductView from "./product_view";

class allProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products.filter(product => product.category === this.props.category)
        }
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(this.state)
        if (this.props.category !== prevProps.category) {
            if (this.props.category === '') {
                this.setState({ products: this.props.products})
            } 
            else {
                this.setState({ products: this.props.products.filter(product => product.category === this.props.category)})
            }
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
                    {this.state.products.length} Results for {capitalize(this.props.category)}
                </div>
                <div className="product-container">
                    <ul className="product-list">
                        {this.state.products.map((product, key) => (
                            <ProductView key={key} product={product}/>
                        ))}
                    </ul>


                </div>
            </div>
        )
    }
}

export default allProducts