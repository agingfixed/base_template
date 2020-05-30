import React from 'react';
import logo from '../logo.svg';
import './Windows.css';

function Login_Window() {
  return (
    <div className="Login_Window">
      <header className="App-header">
        <img src={logo} className="Logo_Demo" alt="logo" />
        <p>
          Login Demonstration
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to learn React
        </a>
      </header>
    </div>
  );
}

export default Login_Window;