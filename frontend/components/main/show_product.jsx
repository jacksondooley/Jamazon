import React from "react";

class ShowProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    componentDidUpdate

    render() {
        debugger
        console.log(this.props)
        return (
            <div>
                {this.props.product.name}
            </div>
        )
    }
}

export default ShowProduct