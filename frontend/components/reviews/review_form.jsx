import React from "react";
import { useHistory } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRating = this.setRating.bind(this)
    this.state = {
      user_id: this.props.userId,
      product_id: this.props.match.params.id,
      rating: 0,
      title: "",
      body: "",
      product: this.props.products.filter(product => product.id === parseInt(this.props.match.params.id))[0]
    }
  }

  componentDidMount() {
    this.setState({ product: this.props.products.filter(product => product.id === parseInt(this.props.match.params.id))[0]})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.reviewAction(this.state).then(()=>{
      this.props.history.replace(`/products/${this.props.match.params.id}`)})
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
      <div className="review-form-container">
        <div className="review-form-title">
          <h1>Create Review</h1>
          <div className="review-product">
            <img src={`${this.state.product.photoUrl}`}/>
            <div >
              {this.state.product.name}
            </div>
          </div>
        </div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div onChange={this.setRating} className="review-rating">
            <h2>Overall rating</h2>
            <div className="review-values">
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
          </div>
          <div className="review-headline">
            <h3>Add a headline</h3>
            <input 
              type="text" 
              placeholder="What's most important to know?"
              onChange={this.handleChange('title')}
            />
          </div>
          <div className="review-body">
            <h4>Add a written review</h4>
            <textarea
              placeholder="What did you like or dislike? What did you use this product for?"
              onChange={this.handleChange('body')}
            />
          </div>
          <button type="submit" className="button6"> Submit</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm