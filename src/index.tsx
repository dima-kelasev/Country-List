import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./components/Header";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header>
        <App />
      </Header>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
