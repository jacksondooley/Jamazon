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
        {/* <IconContext.Provider value={{ size: "40px" }}>
          <FaShoppingCart/>
        </IconContext.Provider> */}
        <div className="shopping-cart-num">0</div>
        <img  className="shopping-cart-icon" src="/assets/cart.svg" />
        <div>Cart</div>
      </div>
    )
  }
}

export default ShoppingCart