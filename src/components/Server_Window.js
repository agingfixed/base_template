import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
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
  serverTextBoxClick = this.serverTextBoxClick.bind(this)
  fileShutterDrawer = this.fileShutterDrawer.bind(this)
  genericAPICall = this.genericAPICall.bind(this)
  textBoxToServer = this.textBoxToServer.bind(this)

  genericFunction(event){
    const {value,name} = event.target;
    event.preventDefault()
    this.props.genericAction({[name]:value})
  }

  serverTextBoxClick(event){
    event.preventDefault()
    console.log(event.target.value)
    if(this.state.serverClicks === 0 ){
      console.log(event.target)
      this.props.genericAction({textAreaServer:""})
      this.setState((state) => {
        return {serverClicks: state.serverClicks + 1};
      });
    }
  }
  fileShutterDrawer(){
    return(<div className="Server_Shutter" style={{height:(parseInt(this.props.template_reducer.sliderTwo, 10)*3.33).toString(10)+"px"}}></div>)
  }
  genericAPICall(event){
    const {value} = event.target;
    event.preventDefault()
    let data = {tokenSelected:value}
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
        .then((response)=> {this.props.genericAction({APIResponse:{tokenSelected:response.Data.tokenSelected,coinbaseResponse:response.Data.data}})})
  }
  textBoxToServer(event){
    event.preventDefault()
    let data = {textToServer:this.props.template_reducer.textAreaServer}
    data = JSON.stringify(data)
    fetch(`api/textBoxServer/`,
        {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body:data})
        .then(response=> response.json())
        .then(response=> this.props.genericAction({textAreaServerResponse:response.Data}))
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
          className="serverTextAreaField"
          id="w3review" 
          name="textAreaServer" 
          rows="4" 
          cols="50"
          value={this.props.template_reducer.textAreaServer}
          onClick={this.serverTextBoxClick}
          onChange={this.genericFunction}
          >
          </textarea><br></br>
          <input 
          type="submit" 
          value="Send text to server process"
          onClick={this.textBoxToServer}
          ></input><br></br>
          <div className = "serverTextArea">
            <pre>{this.props.template_reducer.textAreaServerResponse}</pre>
          </div>
          <br></br>
          <br></br>
          <div className="serverSubmitButtonArea">
            <select 
            type="submit" 
            value={this.props.template_reducer.APIResponse.tokenSelected}
            onChange={this.genericAPICall}
            name="APIButtonStatus"
            >
            <option value="">-- Select Request from Coinbase --</option>
            <option value='BTC-USD'> Load Coinbase Bitcoin Price </option>
            <option value='ETH-USD'> Load Coinbase Ethereum Price </option>
            <option value='EOS-USD'> Load Coinbase EOS Price </option>
            </select><br></br>
            {this.props.template_reducer.APIResponse.coinbaseResponse.high===""?
            <div className = "APIReturnedText">
              API data will appear here</div>:
            <div className = "APIReturnedText">
              High: ${this.props.template_reducer.APIResponse.coinbaseResponse.high.substring(0,6)}
              <br></br>
              Last: ${this.props.template_reducer.APIResponse.coinbaseResponse.last.substring(0,6)}
              <br></br>
              Low: ${this.props.template_reducer.APIResponse.coinbaseResponse.low.substring(0,6)}
            </div>}
          </div>
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