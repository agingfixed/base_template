import React from 'react';
import logo from '../logo.svg';
import './Windows.css';

function Server_Window() {
  return (
    <div className="Server_Window">
      <header className="Server_Window_Header">
        <img src={logo} className="Logo_Demo" alt="logo" />
        <p>
          Server Demonstrations
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

export default Server_Window;