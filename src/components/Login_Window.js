import React from 'react';
import './Windows.css';

function Login_Window() {
  return (
    <div className="Login_Window">
      <header className="App-header">
        <p>
          Login Demonstration
        </p>
      </header>
        <body>
        <form action="/action_page.php">
          <label for="fname">Login Idenity:</label>
          <input type="text" id="fname" name="fname"></input><br></br>
          <label for="lname">Password:</label>
          <input type="password" id="lname" name="lname"></input><br></br>
          <input type="submit" value="Login"></input>
        </form>
        </body>
    </div>
  );
}

export default Login_Window;