import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {textBoxTyping} from '../actions/typing.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class File_Window extends Component{
  constructor(){
      super()
      this.state={
        serverClicks:0,
        fileClicks:0
      }
  }
  genericFunction = this.genericFunction.bind(this)
  updateTextBox = this.updateTextBox.bind(this)
  fileTextBoxClick = this.fileTextBoxClick.bind(this)

  genericFunction(event){
    event.preventDefault()
    this.props.genericAction({genericButtonClick:"Clicked Button"})
  }
  updateTextBox(event){
    event.preventDefault()
    this.props.textBoxTyping({textAreaFile:event.target.value})
  }
  fileTextBoxClick(event){
    event.preventDefault()
    if(this.state.fileClicks === 0 ){
      this.props.textBoxTyping({textAreaFile:""})
      this.setState((state) => {
        return {fileClicks: state.fileClicks + 1};
      });
    }
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
          value={this.props.template_reducer.textAreaFile}
          onClick={this.fileTextBoxClick}
          onChange={this.updateTextBox}
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
      {genericAction:genericAction,
        textBoxTyping:textBoxTyping} , dispatch)
}

//state connect and action connect
export default connect(mapStateToProps, matchDispatchToProps)(File_Window);