import React from "react";
import ProductView from "./product_view";

class searchProducts extends React.Component {
    constructor(props) {
        super(props) 
        
        // this.state = {
        //     products: 
        // }
    }

    // componentDidMount() {
    //     this.props.fetchProducts(this.props.category)
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.category !== prevProps.category) {
    //         this.props.fetchProducts(this.props.category)
    //     }
    // }


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
                <div className="product-container">
                    <ul className="product-list">
                        {this.props.products.map((product, key) => (
                            <ProductView key={key} product={product}/>
                        ))}
                    </ul>


                </div>
            </div>
        )
    }
}

export default searchProducts