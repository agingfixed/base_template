import React, {Component} from 'react';
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import './Login_Page.css';

import {genericAction} from '../actions/generic_actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import auth from '../auth.js';



class ValidatedLoginForm extends Component{
  constructor(){
      super()
      this.state={
      }
  }

  genericFunction = this.genericFunction.bind(this)
  genericFunction2 = this.genericFunction2.bind(this)
  authenticatedUserCheck = this.authenticatedUserCheck.bind(this)
  loginFunction = this.loginFunction.bind(this)
  informUserOfInvalidUser = this.informUserOfInvalidUser.bind(this)
  resetInformUser = this.resetInformUser.bind(this)

  

  genericFunction(event){
    const {value,name} = event.target;
    event.preventDefault()
    this.props.genericAction({[name]:value})
  }
  genericFunction2(value){
    this.props.genericAction({informUserOfInvalidLogin:value})
  }
  loginFunction(setSubmitting,array){
    auth.login(() => {
      this.props.genericAction({userData:array[1].userData})
      setSubmitting(false)
      this.props.history.push("/genericApp")
    })
  }
  informUserOfInvalidUser(setSubmitting){
    this.genericFunction2({informUserOfInvalidLogin:true})
    setSubmitting(false)
  }
  
  authenticatedUserCheck(values,setSubmitting){
    let mounted = true;
    let data={loginValues:values}
    data = JSON.stringify(data)
    fetch(`api/authenticateUser/`,
        {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body:data})
        .then(response=> response.json())
        .then(response=> [{validUser:response.validUser},{userData:response.userData}])
        .then(array => {
          if(mounted){
            array[0].validUser?this.loginFunction(setSubmitting,array):this.informUserOfInvalidUser(setSubmitting)
          }else{
            //this.props.resetAction()
          }
          return () => mounted = false;
        })
        //.then(array=> array[0].validUser?<div className="input-feedback">{"User not found"}</div>:"")
        //.then(()=> this.props.genericAction(array[1]))
  }

  resetInformUser(){
    this.genericFunction2(false)
  }

  render(){
  return (
    <Formik
        initialValues = {{email: "",password: ""}}
        onSubmit = {(values,{setSubmitting}) => {
            console.log(`Submitting ${values.email} & ${values.password}`)
            //this is where code goes for button click
            this.authenticatedUserCheck(values,setSubmitting)
            /**/

        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
          })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit}
             = props;
             return (
        <form id="LandingPageForm" onSubmit={handleSubmit}>
          <label id="LandingPageLabel" htmlFor="email">Email login: </label>
          <input 
            id="LandingPageInputE"
            name="email" 
            type="text" 
            placeholder="Enter your email"
            value = {values.email}
            onChange = {handleChange}
            onInput = {this.resetInformUser}
            onBlur = {handleBlur}
            className={errors.email && touched.email && "error"}
         />
         {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
            )}

          <label id="LandingPageLabel" htmlFor="email">Password : </label>
          <input
            id="LandingPageInputP"
            name="password"
            type="password"
            placeholder="Enter your password"
            value = {values.password}
            onChange = {handleChange}
            onInput = {this.resetInformUser}
            onBlur = {handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
            )}
            {this.props.template_reducer.informUserOfInvalidLogin?<div className="input-feedback">Incorrect User or Password</div>:""}
          <button 
            value={values}
            id="LandingPageButton1" 
            type="submit" 
            disabled = {isSubmitting}
          >
            Login
          </button>
          <button 
            className = "LandingPageButton2"
            id="LandingPageButton2" 
            type="button" 
            disabled = {isSubmitting}
          >
            New User
          </button>
          <div className="noNewUser">Contact site owner for new user access</div>
        </form>
             );
        }}
    </Formik>
    )}}
      


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
export default connect(mapStateToProps, matchDispatchToProps)(ValidatedLoginForm);