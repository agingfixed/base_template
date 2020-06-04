import React, {Component} from 'react';
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import './Login_Page.css';

import {genericAction} from '../actions/generic_actions.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ValidatedLoginForm extends Component{
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
    <Formik
        initialValues = {{email: "",password: ""}}
        onSubmit = {(values,{setSubmitting}) => {
            console.log(`Submitting ${values.email} & ${values.password}`)
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
        /*
        validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!EmailValidator.validate(values.email)) {
              errors.email = "Invalid email address";
            }
      
            const passwordRegex = /(?=.*[0-9])/;
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password = "Password must be 8 characters long.";
            } else if (!passwordRegex.test(values.password)) {
              errors.password = "Invalida password. Must contain one number";
            }
            return errors;
          }}
          */
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email login: myresume@mail.com</label>
          <input 
            name="email" 
            type="text" 
            placeholder="Enter your email"
            value = {values.email}
            onChange = {handleChange}
            onBlur = {handleBlur}
            className={errors.email && touched.email && "error"}
         />
         {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
            )}

          <label htmlFor="email">Password : SecureLogin123</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value = {values.password}
            onChange = {handleChange}
            onBlur = {handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
            )}
          <button type="submit" disabled = {isSubmitting}>
            Login
          </button>
        </form>
             );
        }}
    </Formik>
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
export default connect(mapStateToProps, matchDispatchToProps)(ValidatedLoginForm);