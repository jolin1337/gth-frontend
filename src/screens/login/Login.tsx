import React, { Component } from 'react';
import './Login.css';
import logo from '../../logo.svg';

class Login extends Component {
  render() {
    return (
      <form className="LoginPage" action="/home" method="GET">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <label htmlFor="name">Name:</label>
        <input required type="text" id="name" />
        <label htmlFor="password">Password:</label>
        <input required type="text" id="password" />
        <input type="submit" value="Login" />
        <a href="#" className="App-link Register-account">Register account</a>
      </form>
    );
  }
}

export default Login;
