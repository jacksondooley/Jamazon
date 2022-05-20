import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons"

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchCart(this.props.userId)
  }

  cartLength = (cart) => {
    let cartSum = 0
    cart.forEach((item) => {
      cartSum += item.quantity
    })
    return cartSum
  }

  render() {
    return (
      <div className="shopping-cart">
        {/* <IconContext.Provider value={{ size: "40px" }}>
          <FaShoppingCart/>
        </IconContext.Provider> */}
        <div className="shopping-cart-num">{this.props.cart.length ? this.cartLength(this.props.cart) : 0}</div>
        <img  className="shopping-cart-icon" src="https://jamazon-seeds.s3.amazonaws.com/cart.svg" />
        <div className="shopping-cart-title">Cart</div>
      </div>
    )
  }
}

export default ShoppingCart