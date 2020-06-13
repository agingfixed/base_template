/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Windows.css';

import Logo_Link_Window from './Logo_Link_Window';
import Server_Window from './Server_Window';
import File_Window from './File_Window';
import User_Window from './User_Window';


export const Entire_App = (props) =>{
  return (
    <div className = "Entire_App">
        <Server_Window />
        <File_Window />
        <Logo_Link_Window />
        <User_Window props = {props}/>
    </div>
  )
};