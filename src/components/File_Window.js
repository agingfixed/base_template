import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
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
  fileTextBoxClick = this.fileTextBoxClick.bind(this)
  fileShutterDrawer = this.fileShutterDrawer.bind(this)
  saveTextBoxToServer = this.saveTextBoxToServer.bind(this)
  loadTextBoxFromServer = this.loadTextBoxFromServer.bind(this)

  genericFunction(event){
    const {value,name} = event.target;
    event.preventDefault()
    this.props.genericAction({[name]:value})
  }
  fileTextBoxClick(event){
    event.preventDefault()
    if(this.state.fileClicks === 0 ){
      this.props.genericAction({textAreaFile:""})
      this.setState((state) => {
        return {fileClicks: state.fileClicks + 1};
      });
    }
  }
  fileShutterDrawer(){
    return(<div className="File_Shutter" style={{height:(parseInt(this.props.template_reducer.sliderOne, 10)*3.33).toString(10)+"px"}}></div>)
  }
  saveTextBoxToServer(event){
    event.preventDefault()
    let array = []
    const value = this.props.template_reducer.fileSlot
    let data = {textToServer:this.props.template_reducer.textAreaFile,
    fileSlot:value}
    data = JSON.stringify(data)
    fetch(`api/textBoxFileSystemSave/`,
        {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body:data})
        .then(response=> response.json())
        .then(response=> array = [{textAreaServerFileResponse:response.Data},{fileSlotSave:response.fileSlotSave}])
        .then(()=> this.props.genericAction(array[0]))
        .then(()=> this.props.genericAction(array[1]))
    }
    loadTextBoxFromServer(event){
      event.preventDefault()
      let array = []
      const value = this.props.template_reducer.fileSlot
      let data = {textToServer:this.props.template_reducer.textAreaFile,
      fileSlot:value}
      data = JSON.stringify(data)
      fetch(`api/textBoxFileSystemLoad/`,
          {
              method: 'POST',
              headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
          body:data})
          .then(response=> response.json())
          .then(response=> array = [{textAreaServerFileResponse:response.Data},{fileSlot:response.fileSlot}])
          .then(()=> this.props.genericAction(array[0]))
          .then(()=> this.props.genericAction(array[1]))
      }
  render(){
  return (
    <div className="File_Window">
      <header className="App-header">
        <p>File Demonstrations</p>
      </header>
      <div className="Div_Body">
        {this.fileShutterDrawer()}
        <form action="/action_page.php">
          <label>Save Text to Server Files:</label><br></br>
          <textarea 
          id="w3review" 
          name="textAreaFile" 
          rows="4" 
          cols="50"
          value={this.props.template_reducer.textAreaFile}
          onClick={this.fileTextBoxClick}
          onChange={this.genericFunction}
          >
          </textarea>
          <br></br>
          <br></br>
          Select file slot to save or load
          <br></br>
          <select 
            type="submit" 
            value={this.props.template_reducer.fileSlot}
            onChange={this.genericFunction}
            name="fileSlot"
            className = "slotSelect"
            >
            <option value="0">-- Select file slot --</option>
            <option value='1'> ------- slot 1 ------- </option>
            <option value='2'> ------- slot 2 ------- </option>
            <option value='3'> ------- slot 3 ------- </option>
            <option value='4'> ------- slot 4 ------- </option>
            <option value='5'> ------- slot 5 ------- </option>
            </select>
           <br></br>
            <input 
          type="submit" 
          value="Save text to File slot"
          onClick={this.saveTextBoxToServer}
          ></input>
           <input 
          type="submit" 
          value="Load text from File slot"
          onClick={this.loadTextBoxFromServer}
          ></input>
            <br></br>
          <pre>{this.props.template_reducer.textAreaServerFileResponse}</pre>
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