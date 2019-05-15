import React, { Component } from "react";
import "../CSS/Header.css";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-image">
        <img
          className="img-icon"
          src="https://media.licdn.com/dms/image/C5603AQHZKiskUQD4NA/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=oLeU8cdgXUG7XCLBIqGs1RF-eZz9ZL7CYgrhsqDI_SA"
          alt="Profile"
        />
      </div>
    );
  }
}

export default HeroImage;
