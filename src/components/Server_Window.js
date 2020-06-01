import React from 'react';
import './Windows.css';

function Server_Window() {
  return (
    <div className="Server_Window">
      <header className="Server_Window_Header">
        <p>
          Server Demonstrations
        </p>
      </header>
      <body>
        <form action="/action_page.php">
          <label for="sfdata">Send text to Server Functions:</label><br></br>
          <textarea id="w3review" name="w3review" rows="4" cols="50">
            Type in Data that will run through server functions...
          </textarea><br></br>
          <input type="submit" value="Send text to server process"></input><br></br>
          Processed server data will display here
        </form>
        </body>
    </div>
  );
}

export default Server_Window;