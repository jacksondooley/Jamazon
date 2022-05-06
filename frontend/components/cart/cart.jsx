import React from "react";

class Cart extends React.Component {

  render() {
    return (
      <div>
        <div className="kettle-container">
          <img className="kettle-img" src="/assets/kettle-desaturated.svg" />
          <h1>
            Your Jamazon Cart is Empty
          </h1>
        </div>
      </div>
    )
  }
}

export default Cart