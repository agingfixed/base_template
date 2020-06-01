/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Windows.css';

import Logo_Link_Window from './Logo_Link_Window';
import Server_Window from './Server_Window';
import File_Window from './File_Window';
import Login_Window from './Login_Window';

function Entire_App() {
    return (
      <div className="Entire_App">
        <Server_Window />
        <File_Window />
        <Logo_Link_Window />
        <Login_Window />
      </div>
    );
  }
  
  export default Entire_App;