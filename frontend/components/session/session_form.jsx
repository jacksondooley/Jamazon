import React from "react"
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import DemoUser from "./demo_user";
import SessionErrors from "./session_errors";
import SessionFooter from "./session_footer";

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

    handleClick(e) {
        e.preventDefault()
        <Route
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
                            className="session-input"
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
            <div className="session-container">
                <Link to="/"><h1>Jamazon</h1></Link>
                <div className="session-form">
                    <h2>{this.props.formType}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email:
                            <input
                                className="session-input"
                                type="text"
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        {formName()}
                        <label htmlFor="">Password:
                            <input 
                                className="session-input"
                                type="text"
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                        <SessionErrors errors={this.props.errors} />
                        <input className="button" type="submit" value={this.props.formType}/>
                    </form>
                    <DemoUser setState={this.setState}/>
                </div>
                <div className="switch-form">
                   <h5 className="switch-form-text"><span>{oppForm() === 'signup' ? "Don't have an account yet?" : "Already have an account?"}</span></h5>
                    <div className="switch-form-line"></div>
                </div>
                <div className="switch-button">
                    <Link to={`/${oppForm()}`}>
                        <button className="button">{oppForm()}</button>    
                    </Link>
                </div>
                <SessionFooter/>
            </div>
        )
    }
}



export default SessionForm