import React, { Component } from "react";
import "../CSS/NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    const element = document.getElementById("desktop-nav");
    this.setState({ top: element.offsetTop, height: element.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  render() {
    return (
      <nav
        id="desktop-nav"
        className={this.state.scroll > this.state.top ? "fixed-nav" : ""}
      >
        <ul className="nav-links">
          <li>
            <h3>
              <a href="/">Projects</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/">Resume</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/">About</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/">Contact</a>
            </h3>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
