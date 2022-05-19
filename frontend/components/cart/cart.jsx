import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: 0.00
    }
  }

  addToSubtotal(price) {
    this.setState({ subtotal: this.state.subtotal + parseInt(price)})
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
        <div>
          <h1>Shopping Cart</h1>
          <ul>
            {this.props.items.map((item) => (
                <li>
                  <div>
                    <a href="">
                      <img src={item.photoUrl}/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      {item.name}
                    </a>
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
                    <button>Delete</button>
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