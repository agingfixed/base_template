import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Server_Window extends Component{
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
    <div className="Server_Window">
      <header className="Server_Window_Header">
        <p>
          Server Demonstrations
        </p>
      </header>
      <div className = "Div_Body">
        <form action="/action_page.php">
          <label >Send text to Server Functions:</label><br></br>
          <textarea 
          id="w3review" 
          name="w3review" 
          rows="4" 
          cols="50"
          defaultValue="Type in Data that will run through server functions..."
          >
          </textarea><br></br>
          <input 
          type="submit" 
          value="Send text to server process"
          onClick={this.genericFunction}
          ></input><br></br>
            Processed server data will display here
          <br></br>
          <input 
          type="submit" 
          value="Asynchronous API call"
          onClick={this.genericFunction}
          ></input><br></br>
         Asynchronous API info will display here
        </form>
        </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(Server_Window);