import React, { Component } from "react";
import "../CSS/Header.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <a href="">Projects</a>
        <a href="">Resume</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    );
  }
}

export default NavBar;
