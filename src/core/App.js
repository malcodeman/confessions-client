import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./state/store";
import darkTheme from "./styles/themes/dark";
import Posts from "../features/posts/containers/Posts";
import CreatePost from "../features/posts/components/CreatePost";
import Header from "../features/header/components/Header";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <>
            <Header />
            <Route exact path="/" component={Posts} />
            <Route exact path="/submit" component={CreatePost} />
          </>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
