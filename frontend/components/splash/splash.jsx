import React from "react";
import { Link } from "react-router-dom"

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash">
          <div className="item-container">
            <div className="item-card">
                <div>
                  Jamazon Favorite
                </div>
                <div className="item-img">
                  <Link to="/products/29">
                    <img src="https://jamazon-seeds.s3.amazonaws.com/jams/blackberry.jpg" />
                  </Link>
                </div>
            </div>
            <div className="item-card">
                <div>
                  Deal of the Day
                </div>
                <div className="item-img">
                  <Link to="/products/13">
                    <img src="https://jamazon-seeds.s3.amazonaws.com/electronics/ipad.jpg" />
                  </Link>
                </div>
            </div>
            <div className="item-card">
                <div>
                  Banana
                </div>
                <div className="item-img">
                  <Link to="/products/1">
                    <img src="https://jamazon-seeds.s3.amazonaws.com/books/hailMary.jpg" />
                  </Link>
                </div>
            </div>
            <div className="item-card">
                <div>
                

                </div>
                <div className="item-img">
                  <Link to="/products/1">
                    <img src="https://jamazon-seeds.s3.amazonaws.com/books/hailMary.jpg" />
                  </Link>
                </div>
            </div>
            <div className="item-card">
              <div>
                Interview Prep
              </div>
              <div className="item-img">
                <Link to="/products/4">
                  <img src="https://jamazon-seeds.s3.amazonaws.com/books/alogrithm_design_manual.jpg" />
                </Link>
              </div>
            </div>
            <div className="item-card">
              <div>
                Remember Jim
              </div>
              <div className="item-img">
                <Link to="/products/21">
                  <img src="https://jamazon-seeds.s3.amazonaws.com/groceries/yogurt.jpeg" />
                </Link>
              </div>
            </div>
            <div className="item-card">
              <div>
                Keep on Jammin`
              </div>
              <div className="item-img">
                <Link to="/products/30">
                  <img src="https://jamazon-seeds.s3.amazonaws.com/jams/orange.jpg" />
                </Link>
              </div>
            </div>
            <div className="item-card">
              <div>
                Sci-Fi Favorite
              </div>
              <div className="item-img">
                <Link to="/products/1">
                  <img src="https://jamazon-seeds.s3.amazonaws.com/books/hailMary.jpg" />
                </Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Splash