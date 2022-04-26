import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons"

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="shopping-cart">
        <IconContext.Provider value={{ size: "40px" }}>
          <FaShoppingCart/>
        </IconContext.Provider>
        <img  src="/assets/cart.svg" />
      </div>
    )
  }
}

export default ShoppingCart