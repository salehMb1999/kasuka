import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/header";
import "./index.css";
import Introduction from "./introduction/introduction";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Introduction />
  </React.StrictMode>,
);
