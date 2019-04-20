import React, { Component } from 'react';
import gear from './gear_black.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gear} className="gear-1" alt="gear-1" />
          <p>
            Website Under
            Construction
          </p>
          <a
            className="App-link"
            href="https://github.com/AaronStahley/aaronstahley.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Project
          </a>
        </header>

        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
        </form>
      </div>
    );
  }
}

export default App;
