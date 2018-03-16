import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Menu from './components/Menu';
import BarraNovaQuestao from './components/BarraNovaQuestao';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <MuiThemeProvider> 
  <AppBar
    title="MultiProva 3.0"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <Menu />
  <BarraNovaQuestao />
  </MuiThemeProvider>
);

render(<App />, document.getElementById("root"));
