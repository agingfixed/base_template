/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Entire_App} from './components/Entire_App';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import allReducers from './reducers/reducers_combine.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ValidatedLoginForm from './components/Login_Page';
import {ProtectedRoute} from './protected_route.js';

const middleware = applyMiddleware(thunk,logger)
const store = createStore(allReducers,middleware);

ReactDOM.render(
    <Provider store = {store}>
      <React.StrictMode>
        <BrowserRouter >
          <Switch>
              <Route 
              exact path="/" 
              component={ValidatedLoginForm}
              />
              <ProtectedRoute 
              exact path="/genericApp" 
              component={Entire_App}
              />
              <Route
              path = "*" component = {()=> "404 Not Found"}
              />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*<Entire_App/>*/ //when i do multipule pages this will be what
//login goest to

//<LandingPage/> //when server is setup this will be login to
//entire app (css will have to be improved conflicts exist might have
//to do router or seperate web page when ready)