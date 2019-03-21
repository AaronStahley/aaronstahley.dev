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
      </div>
    );
  }
}

export default App;
