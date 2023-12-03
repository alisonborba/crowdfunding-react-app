import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain="goerli"
    clientId="565acaaab1c7a39a3f2433151d9e262e"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
