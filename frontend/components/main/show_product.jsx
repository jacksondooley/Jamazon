import React from "react";

class ShowProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                <div>
                    <img src={`${this.props.product.photoUrl}`} alt="" />
                </div>
                <div>
                    <h2>
                        {this.props.product.name}
                    </h2>
                    {this.props.product.rating}
                    <div>
                        Price: {this.props.product.price}
                    </div>
                    {this.props.product.description}
                </div>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ShowProduct