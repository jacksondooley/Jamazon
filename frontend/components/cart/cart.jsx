import React from "react";
import { Link } from "react-router-dom"

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: 0.00
    }
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

  handleDelete() {
    this.props.deleteItem()
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
          <div className="cart-page-top">
            <h1>Shopping Cart</h1>
          </div>
          <ul className="cart-item-container">
            {this.props.items.map((item) => (
                <li className="cart-item">
                  <div>
                  <Link to={`/products/${item.id}`}>
                      <img src={item.photoUrl}/>
                    </Link>
                  </div>
                  <div>
                  <Link to={`/products/${item.id}`}>
                    {item.name}
                  </Link>
                  </div>
                  <div>
                    {item.price}
                  </div>
                  <div>
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
                    <button onClick={this.handleDelete}>Delete</button>
                  </div>
                </li>
            ))}
          </ul>
          <div>Subtotal ({this.props.items.length} items): ${this.state.subtotal}</div>
          <div>
            <button>Proceed to checkout</button>
          </div>
        </div>
        }    
      </>
    )
  }
}

export default Cart