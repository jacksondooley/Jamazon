import React from "react";

class allProducts extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map((product) => (
                        product.name
                    ))}
                </ul>
            </div>
        )
    }
}

export default allProducts