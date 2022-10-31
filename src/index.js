import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-b15sn7k46jbxaut7.us.auth0.com"
    clientId="rdzFq5SqztNEi6iYVscV6uDsoly2kiAO"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
