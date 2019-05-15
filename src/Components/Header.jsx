import React, { Component } from "react";
import HeroImage from "./HeroImage";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import "../CSS/Header.css";

class Header extends Component {
  render() {
    return (
      <section className="hero-background">
        <div className="hero-inner">
          <HeroImage />
          <h1>Aaron Stahley</h1>

          <SocialIcons />
        </div>
      </section>
    );
  }
}

export default Header;
