import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/header";
import "./index.css";
import Introduction from "./introduction/introduction";
import Features from "./features/features";
import Services from "./services/services";
import Cta from "./cta/cta";
import Portfolio from "./portfolio/portfolio";
import Counts from "./counts/counts";
import Testimonials from "./testimonials/testimonials";
import Teams from "./teams/teams";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Introduction />
    <Features />
    <Services />
    <Cta />
    <Portfolio />
    <Counts />
    <Testimonials />
    <Teams />
    <Contact />
    <Footer />
  </React.StrictMode>,
);
