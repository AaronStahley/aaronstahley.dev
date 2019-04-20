import React, { Component } from 'react';
import gear from './gear_black.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {

    /**
     * Displays no mater what route. Should hold nav 
     * and footer info. 
     */
    return (
      <Router>   
        <Route exact path="/" component={Home} />
        <Route path="/test" component={test} />
      </Router> 
    );
  }
}

/**
 * Holds the consturction page for now. 
 */
function Home() { 
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

/**
 * Used to test on a deployed site. 
 */
function test() {
  return (
    <div>
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

export default App;
