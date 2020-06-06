import React, {Component} from 'react';
import logo from '../logo.svg';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {sliderAction} from '../actions/slider_action.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Logo_Link_Window extends Component{
  constructor(){
      super()
      this.state={
      }
  }
  genericFunction = this.genericFunction.bind(this)
  sliderFunctionOne = this.sliderFunctionOne.bind(this)
  sliderFunctionTwo = this.sliderFunctionTwo.bind(this)

  genericFunction(event){
    event.preventDefault()
    this.props.genericAction({genericButtonClick:"Clicked Button"})
  }
  sliderFunctionOne(event){
    //event.preventDefault()
    this.props.sliderAction({sliderOne:event.target.value})
  }
  sliderFunctionTwo(event){
    //event.preventDefault()
    this.props.sliderAction({sliderTwo:event.target.value})
  }
  render(){
  return (
    <div className="Logo_Link_Window">
      <header className="Logo_Link_Header">
        <img src={logo} className="Logo_Demo" alt="logo" />
        <p className = "FEG">
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
      <input 
      type="range"
      min="0" 
      max="100" 
      value={this.props.template_reducer.sliderOne}
      className="sliderOne" 
      id="myRange"
      onChange={this.sliderFunctionOne}
      ></input>
         <input 
      type="range"
      min="0" 
      max="100" 
      value={this.props.template_reducer.sliderTwo}
      className="sliderTwo" 
      id="myRange"
      onChange={this.sliderFunctionTwo}
      ></input>
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
      {genericAction:genericAction,
        sliderAction : sliderAction} , dispatch)
}

//state connect and action connect
export default connect(mapStateToProps, matchDispatchToProps)(Logo_Link_Window);
