import React from "react";
import { useHistory } from "react-router-dom";

class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRating = this.setRating.bind(this)
    this.state = {
      user_id: this.props.userId,
      product_id: this.props.match.params.id,
      rating: 0,
      title: "",
      body: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.reviewAction(this.state)
    // const history = useHistory()
    // () => history.push(`/products/${this.props.match.params.id}`)
  }

  handleChange(key) {
    return e => this.setState({ [key]: e.target.value })
  }

  setRating(e) {
    this.setState({ rating: e.target.value})
  }

  render() {
    return (
      <div>
        Create Review
        <form action="" onSubmit={this.handleSubmit}>
          <div onChange={this.setRating}>
            Rating
            <label>
              <input type="radio" id="1" name="rating" value="1"/>
            </label>
            <label >
              <input type="radio" id="2" name="rating" value="2" />
            </label>
            <label >
              <input type="radio" id="3" name="rating" value="3" />
            </label>
            <label >
              <input type="radio" id="4" name="rating" value="4" />
            </label>
            <label >
              <input type="radio" id="5" name="rating" value="5" />
            </label>
          </div>
          <label htmlFor="">
            Title
            <input 
              type="text" 
              placeholder="What's most important to know?"
              onChange={this.handleChange('title')}
            />
          </label>
          <label htmlFor="">
            Add a review
            <input 
              type="text" 
              placeholder="What did you like or dislike? What did you use this product for?"
              onChange={this.handleChange('body')}
            />
          </label>
          <button type="submit"> Submit</button>
        </form>
      </div>
    )
  }
}

export default NewReview