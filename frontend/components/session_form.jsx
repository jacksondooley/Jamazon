import React from "react"
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            name: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.returnState()
        this.props.processForm(user)
    }

    returnState() {
        if (this.formType === 'login') {
            return { email: this.state.email, password: this.state.password }
        }
        else {
            return { email: this.state.email, name: this.state.name, password: this.state.password }
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const oppForm = () => {
            if (this.props.formType === 'login') {
                return 'signup'
            } 
            else {
                return 'login'
            }
        }

        const formName = () => {
            if (this.props.formType === 'signup') {
                return (
                    <label>Name:
                        <input 
                            type="text"
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                )
            }
        }

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input 
                            type="text"
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    {formName()}
                    <label htmlFor="">Password:
                        <input 
                            type="text"
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
                <Link to={`/${oppForm()}`}>{oppForm()}</Link>
            </div>
        )
    }
}



export default SessionForm