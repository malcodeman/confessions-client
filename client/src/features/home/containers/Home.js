import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import routes from "../../../core/routes/routes";
import Header from "../../header/components/Header";

const Main = styled.main`
  margin-top: 64px;
  min-height: 100vh;
  background-color: ${props => props.theme.background};
`;

class Homepage extends Component {
  renderRoutes = routes => {
    return (
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>{this.renderRoutes(routes)}</Main>
      </React.Fragment>
    );
  }
}

export default Homepage;
