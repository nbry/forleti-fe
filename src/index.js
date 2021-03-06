import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// To control the order that CSS rules are applied to components
// i.e. Material UI (MUI) will inject CSS at the end of the head, which gives
// the highest specificity to the styling of MUI default components. These lines will
// help control the order in which CSS is applied to components.
import { create } from "jss";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: document.getElementById("jss-insertion-point"),
});

ReactDOM.render(
  <StylesProvider jss={jss}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
