import React from "react";

class SessionErrors extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: this.props.errors}
  }
  

  render() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    )
  }
}

export default SessionErrors