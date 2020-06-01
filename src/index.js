/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Entire_App from './components/Entire_App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Entire_App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
