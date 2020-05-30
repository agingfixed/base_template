import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Logo_Link_Window from './components/Logo_Link_Window';
import Server_Window from './components/Server_Window';
import File_Window from './components/File_Window';
import Login_Window from './components/Login_Window';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    <Server_Window />
    <File_Window />
    <Logo_Link_Window />
    <Login_Window />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
