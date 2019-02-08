import React, { Component } from "react";
import "../App.css";

import Hidden from "@material-ui/core/Hidden";

import MainPage from "./MainPage";
import Responsive from "./Responsive";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hidden smDown>
          <MainPage />
        </Hidden>
        <Hidden smUp>
          <Responsive />
        </Hidden>
      </div>
    );
  }
}

export default App;
