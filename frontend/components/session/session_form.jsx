import React from "react"
import { Redirect } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
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
        this.handleStartDemo = this.handleStartDemo.bind(this)
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

    // handleClick(e) {
    //     e.preventDefault()
    // }

    async handleStartDemo() {
        const demoEmail = "demouser@gmail.com"
        const demoPassword = "password"
        const demoName = 'Demo User'
        let emailIndex = 0
        while (emailIndex <= demoEmail.length) {
            await this.timeout(100)
            this.setState({ email: demoEmail.slice(0, emailIndex)})
            emailIndex++
        }
        if (this.props.formType === 'signup') {
            let nameIndex = 0
            while (nameIndex <= demoName.length) {
                await this.timeout(100)
                this.setState({ name: demoName.slice(0, nameIndex) })
                nameIndex++
            }
        }
        let passwordIndex = 0
        while (passwordIndex <= demoPassword.length) {
            await this.timeout(100)
            this.setState({ password: demoPassword.slice(0, passwordIndex) })
            passwordIndex++
        }
        await this.timeout(200)
        if (this.props.formType === 'signup') {
            let {email, name, password} = this.state
            this.props.processForm({ email: email + (Math.random() * 1000000000), name, password })
        }
        else {
            this.props.processForm(this.returnState())
        }
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
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
                    <label>Name
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

        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }


        return (
            <div className="session-container">
                <Link to="/"><h1>Jamazon</h1></Link>
                <div className="session-form">
                    <div className="session-title">
                        <h2>{capitalize(this.props.formType)}</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                            <input
                                className="session-input"
                                type="text"
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        {formName()}
                        <label htmlFor="">Password
                            <input 
                                className="session-input"
                                type="password"
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                        <SessionErrors errors={this.props.errors} />
                        <input className="button" type="submit" value={capitalize(this.props.formType)}/>
                    </form>
                    <DemoUser handleStartDemo={this.handleStartDemo}/>
                </div>
                <div className="switch-form">
                   <h5 className="switch-form-text"><span>{oppForm() === 'signup' ? "Don't have an account yet?" : "Already have an account?"}</span></h5>
                    <div className="switch-form-line"></div>
                </div>
                <div className="switch-button">
                    <Link to={`/${oppForm()}`}>
                        <button className="button">{capitalize(oppForm())}</button>    
                    </Link>
                </div>
                <SessionFooter/>
            </div>
        )
    }
}



export default SessionForm