import React from 'react';
import './Windows.css';

function File_Window() {
  return (
    <div className="File_Window">
      <header className="App-header">
        <p>File Demonstrations</p>
      </header>
      <body>
        <form action="/action_page.php">
          <label for="sfdata">Save Text to Server Files:</label><br></br>
          <textarea id="w3review" name="w3review" rows="4" cols="50">
            Type in Data that will saved to server files...
          </textarea><br></br>
          <input type="submit" value="Submit and Save Data to Server Files"></input><br></br>
          <input type="submit" value="Load File Data from Server"></input><br></br>
          Received data will display here
        </form>
        </body>
    </div>
  );
}

export default File_Window;