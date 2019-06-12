import React, { Component } from "react";
// Routes
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
// Views
import { Navbar, Footer } from "./views";
// CSS

import "./App.scss";
import "./assets/sass/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
