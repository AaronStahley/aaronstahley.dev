import React, { Component } from "react";
import "../CSS/MobileNav.css";

class MobileNav extends Component {
  render() {
    return (
      <nav id="mobile-nav">
        <i id="icon" className="fas fa-bars fa-2x" />
      </nav>
    );
  }
}

export default MobileNav;
