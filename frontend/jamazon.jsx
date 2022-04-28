import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { signup, login, logout } from './action/session_actions';
import * as APIUtil from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.getState = store.getState
  window.dispatch = store.dispatch
  window.user = {email: 'kevin@gmail.com', password: 'password'}
  window.user2 = {name: 'bry', email: 'bry@bry.com', password: 'password'}
  window.login = login
  window.signup = signup
  window.logout = logout
  window.ajaxlogin = APIUtil.login
  window.ajaxsignup = APIUtil.signup
  window.ajaxlogout = APIUtil.logout


  ReactDOM.render(<Root store={store}/>, root);
});