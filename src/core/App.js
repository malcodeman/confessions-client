import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Home from "../features/home/containers/Home";

import lightTheme from "../core/styles/themes/light";
import darkTheme from "../core/styles/themes/dark";

class App extends Component {
  getTheme = theme => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };
  render() {
    return (
      <ThemeProvider theme={this.getTheme("light")}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
