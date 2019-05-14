import React, { Component } from "react";
import "../CSS/Header.css";

class SocialIcons extends Component {
  render() {
    return (
      <div className="social-icons">
        <a href="https://linkedin.com/in/aaron-stahley-95741b170">
          <i class="fab fa-linkedin fa-4x" />
        </a>
        <a href="https://github.com/AaronStahley">
          <i class="fab fa-github-square fa-4x" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;