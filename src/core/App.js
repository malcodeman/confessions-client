import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./state/store";
import lightTheme from "./styles/themes/light";
import Posts from "../features/posts/containers/Posts";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Route exact path="/" component={Posts} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
