import React from "react";
import ProductView from "./product_view";

class searchProducts extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            products: this.props.products.filter(product => product.name.toLowerCase().includes(this.props.match.params.query.toLowerCase()))
        }
    }

    componentDidMount() {
        this.setState({ products: this.props.products.filter(product => product.name.toLowerCase().includes(this.props.match.params.query.toLowerCase()))})
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.setState({ products: this.props.products.filter(product => product.name.includes(this.props.match.params.query))})
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

export default searchProducts