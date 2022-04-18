import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./components/Header";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header>
          <App />
        </Header>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
