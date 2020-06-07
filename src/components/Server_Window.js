import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {textBoxTyping} from '../actions/typing.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Server_Window extends Component{
  constructor(){
      super()
      this.state={
        serverClicks:0,
        fileClicks:0
      }
  }
  genericFunction = this.genericFunction.bind(this)
  updateTextBox = this.updateTextBox.bind(this)
  serverTextBoxClick = this.serverTextBoxClick.bind(this)
  fileShutterDrawer = this.fileShutterDrawer.bind(this)
  genericAPICall = this.genericAPICall.bind(this)

  genericFunction(event){
    event.preventDefault()
    this.props.genericAction({genericButtonClick:"Clicked Button"})
  }
  updateTextBox(event){
    event.preventDefault()
    this.props.textBoxTyping({textAreaServer:event.target.value})
    console.log(event.target.value)
  }
  serverTextBoxClick(event){
    event.preventDefault()
    console.log(event.target.value)
    if(this.state.serverClicks ===0 ){
      console.log(event.target)
      this.props.textBoxTyping({textAreaServer:""})
      this.setState((state) => {
        return {serverClicks: state.serverClicks + 1};
      });
    }
  }
  fileShutterDrawer(){
    return(<div className="Server_Shutter" style={{height:(parseInt(this.props.template_reducer.sliderTwo, 10)*3.33).toString(10)+"px"}}></div>)
  }
  genericAPICall(event){
  event.preventDefault()
  const {value} = event.target;
  this.props.genericAction({APIButtonStatus:value})
   let data = {tokenSelected:this.props.template_reducer.APIButtonStatus}
    data = JSON.stringify(data)
    fetch(`api/coinbasePrice/`,
        {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body:data})
        .then(response=> response.json())
        .then(response=> console.log(response))
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
      {this.fileShutterDrawer()}
        <form action="/action_page.php">
          <label >Send text to Server Functions:</label><br></br>
          <textarea 
          id="w3review" 
          name="w3review" 
          rows="4" 
          cols="50"
          value={this.props.template_reducer.textAreaServer}
          onClick={this.serverTextBoxClick}
          onChange={this.updateTextBox}
          >
          </textarea><br></br>
          <input 
          type="submit" 
          value="Send text to server process"
          onClick={this.genericFunction}
          ></input><br></br>
          Processed server data will display here
          <br></br>
          <select 
          type="submit" 
          value={this.props.template_reducer.APIButtonStatus}
          onChange={this.genericAPICall}
          >
          <option value="">-- Select Your Activity --</option>
          <option value="load BTC"> Load Coinbase Bitcoin Price </option>
          <option value="load ETH"> Load Coinbase Ethereum Price </option>
          <option value="load EOS"> Load Coinbase EOS Price </option>
          </select><br></br>
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
      {genericAction:genericAction,
        textBoxTyping:textBoxTyping} , dispatch)
}

//state connect and action connect
export default connect(mapStateToProps, matchDispatchToProps)(Server_Window);