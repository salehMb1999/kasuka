import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/header";
import "./index.css";
import Introduction from "./introduction/introduction";
import Features from "./features/features";
import Services from "./services/services";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Introduction />
    <Features />
    <Services />
  </React.StrictMode>,
);
