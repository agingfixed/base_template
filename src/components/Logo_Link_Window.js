import React from 'react';
import logo from '../logo.svg';
import './Windows.css';

function Logo_Link_Window() {
  return (
    <div className="Logo_Link_Window">
      <header className="Logo_Link_Header">
        <img src={logo} className="Logo_Demo" alt="logo" />
        <p>
          Front End Graphics
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to React Framework
        </a>
      </header>
    </div>
  );
}

export default Logo_Link_Window;
