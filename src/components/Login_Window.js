import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login_Window extends Component{
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
    <div className="Login_Window">
      <header className="App-header">
        <p>
          Unique Login User Data:
        </p>
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
export default connect(mapStateToProps, matchDispatchToProps)(Login_Window);