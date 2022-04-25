import { connect } from "react-redux"
import { login } from "../../action/session_actions"
import SessionForm from "./session_form"


const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
})

const mapDispatchToProps = dispatch => ({
    processForm: ( (user) => dispatch(login(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)