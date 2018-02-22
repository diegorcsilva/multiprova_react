import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <MuiThemeProvider> 
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  </MuiThemeProvider>
);

render(<App />, document.getElementById("root"));
