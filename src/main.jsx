import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
