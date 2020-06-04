import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class File_Window extends Component{
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
    <div className="File_Window">
      <header className="App-header">
        <p>File Demonstrations</p>
      </header>
      <div className="Div_Body">
        <form action="/action_page.php">
          <label>Save Text to Server Files:</label><br></br>
          <textarea 
          id="w3review" 
          name="w3review" 
          rows="4" 
          cols="50"
          defaultValue="Type in Data that will saved to server files..."
          >
          </textarea><br></br>
          <input 
          type="submit" 
          value="Submit and Save Data to Server Files"
          onClick={this.genericFunction}
          ></input><br></br>
          <input 
          type="submit" 
          value="Load File Data from Server"
          onClick={this.genericFunction}
          ></input><br></br>
          Received data will display here
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
export default connect(mapStateToProps, matchDispatchToProps)(File_Window);