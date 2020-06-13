import React, {Component} from 'react';
import './Windows.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import auth from '../auth.js';

class User_Window extends Component{
  constructor(){
      super()
      this.state={

      }
  }
  genericFunction = this.genericFunction.bind(this)

  genericFunction(event){
    const {value,name} = event.target;
    event.preventDefault()
    this.props.genericAction({[name]:value})
  }


  render(){
  return (
    
    <div className="Login_Window">
      <header className="App-header">
        <p>
          Private User Data
          Account settings
        </p>
      </header>
      <button 
        id="UserWindowLogoutButton" 
        type="submit" 
        onClick = {()=>{
          auth.logout(() => {
            this.props.props.history.push("/")
          })
        }
      }
        >
        Logout
      </button>
      <button 
        id="UserWindowUserSettings" 
        type="submit" 
        >
        Account Settings
      </button>
      <div className="noUserSettings">This feture is not available at this time</div>
      
  
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
export default connect(mapStateToProps, matchDispatchToProps)(User_Window);