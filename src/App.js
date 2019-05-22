import React, { Component } from "react";
import "./CSS/App.css";
import Header from "./Components/Header.jsx";
import Projects from "./Components/Pages/Projects.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Resume from "./Components/Pages/Resume.jsx";
import NavBar from "./Components/NavBar.jsx";
import MobileNav from "./Components/MobileNav.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <MobileNav />
        <Header />
        <NavBar />
        <main className="main-container">
          <section>
            <h1 className="page-headers--left">Projects</h1>
            <Projects />
          </section>
          <section>
            <h1 className="page-headers--right">Resume</h1>
            <Resume />
          </section>
          <section>
            <h1 className="page-headers--left">About</h1>
            <About />
          </section>
          <section>
            <h1 className="page-headers--right">Contact</h1>
            <Contact />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
