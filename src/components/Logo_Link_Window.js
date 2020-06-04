import React, {Component} from 'react';
import logo from '../logo.svg';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Logo_Link_Window extends Component{
  constructor(){
      super()
      this.state={

      }
  }
  genericFunction = this.genericFunction.bind(this)

  genericFunction(event){
    event.preventDefault()
    this.props.genericAction({genericButtonClick:"Clicked Button"})
  }
  render(){
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
  );}
}

//as stated
function mapStateToProps(state){
  return{
    template_reducer: state.template_reducer
  }
}

//action connect through props
function matchDispatchToProps(dispatch){
  return bindActionCreators(
      {genericAction:genericAction} , dispatch)
}

//state connect and action connect
export default connect(mapStateToProps, matchDispatchToProps)(Logo_Link_Window);
