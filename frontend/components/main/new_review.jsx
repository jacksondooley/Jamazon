import React from "react";

class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      // userId: this.props.userId,
      productId: this.props.match.params.id,
      rating: "",
      title: "",
      body: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        Create Review
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            Rating
            <label >
              <input type="radio" id="" name="rating" value=""/>
            </label>
            <label >
              <input type="radio" id="" name="rating" value="" />
            </label>
            <label >
              <input type="radio" id="" name="rating" value="" />
            </label>
            <label >
              <input type="radio" id="" name="rating" value="" />
            </label>
            <label >
              <input type="radio" id="" name="rating" value="" />
            </label>
          </div>
          <label htmlFor="">
            Title
            <input type="text" placeholder="What's most important to know?"/>
          </label>
          <label htmlFor="">
            Add a review
            <input type="text" placeholder="What did you like or dislike? What did you use this product for?"/>
          </label>
          <button type="submit"> Submit</button>
        </form>
      </div>
    )
  }
}

export default NewReview