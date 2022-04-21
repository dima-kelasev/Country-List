import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header>
        <App />
      </Header>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
