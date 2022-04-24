import { connect, Connect } from "react-redux";
import { logout } from "../action/session_actions";
import Greeting from "./greeting";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: ( () => dispatch(logout()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)