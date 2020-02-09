import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Example from "../Example";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider {...{ theme }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Example} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
