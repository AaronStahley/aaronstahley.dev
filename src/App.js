import React, { Component } from "react";
import "./CSS/App.css";
import Header from "./Components/Header.jsx";
import Projects from "./Components/Pages/Projects.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Resume from "./Components/Pages/Resume.jsx";

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <main>
          <section>
            <Projects />
          </section>
          <section>
            <Resume />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Contact />
          </section>
        </main>
      </body>
    );
  }
}

export default App;
