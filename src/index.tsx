import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./_Rozeh/assets/styles/GlobalStyle";
import { theme } from "./_Rozeh/assets/styles/theme";
import App from "./app/App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
  document.getElementById("root")
);
