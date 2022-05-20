import React from "react";
import { Link } from "react-router-dom"

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: 0.00
    }
  }

  componentDidMount() {
    this.getSubtotal()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.getSubtotal()
    }
  }

  getSubtotal() {
    let sum = 0
    this.props.items.forEach(item => {
      sum += item.quantity * item.price
    })
    this.setState({ subtotal: sum})
  }

  handleDelete(userId, productId) {
    this.props.removeItem(userId, productId)
  }

  render() {
    return (
      <>
        {this.props.items.length === 0 ? <div>
            <div className="kettle-container">
              <img className="kettle-img" src="https://jamazon-seeds.s3.amazonaws.com/kettle-desaturated.svg" />
              <h1>
                Your Jamazon Cart is Empty
              </h1>
            </div>
          </div>
        :
        <div className="cart-page">
          <div className="cart-item-container">
            <div className="cart-page-top">
              <h1>Shopping Cart</h1>
            </div>
            <ul>
              {this.props.items.map((item) => (
                  <li className="cart-item">
                    <div className="cart-item-photo-container">
                    <Link to={`/products/${item.id}`}>
                        <img className="cart-item-photo" src={item.photoUrl}/>
                    </Link>
                    </div>
                    <div className="cart-item-text">
                      <div>
                      <Link to={`/products/${item.id}`}>
                        {item.name}
                      </Link>
                      </div>
                    <div className="product-price">
                      <div className="product-price-sign">
                        $
                      </div>
                      <div className="product-price-dollars">
                        {item.price.split(".")[0]}
                        {console.log(item.price)}
                      </div>
                      <div className="product-price-cents">
                        {item.price.split(".")[1]}
                      </div>
                    </div>
                      <div>
                        Department:{" "}{item.category}
                      </div>
                      <div className="cart-stock">
                        In Stock
                      </div>
                      <div>
                        Eligible for FREE Shipping & FREE Returns
                      </div>
                      <div>
                        <select name="qty">
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div>
                        <button onClick={() => this.handleDelete(this.props.userId, item.id)} className="button7">
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
          <div className="cart-subtotal">
            Subtotal ({this.props.items.length} items): ${this.state.subtotal}
          </div>
          </div>
          <div className="checkout-container">
              <div className="product-price">
                <div className="product-price-sign">
                  Subtotal ({this.props.items.length} items): $
                </div>
                <div className="product-price-dollars">
                  {this.state.subtotal.toString().split(".")[0]}
                </div>
                <div className="product-price-cents">
                  {this.state.subtotal.toString().split(".")[1]}
                </div>
              </div>
            <Link to="/cart/checkout">
              <button className="button3" onClick={() => this.handleDelete(this.props.userId, null)}>
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
        }    
      </>
    )
  }
}

export default Cart