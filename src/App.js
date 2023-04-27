/* jshint esversion: 6 */

import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ClientLogo from "./components/ClientLogo";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial.js";
import Metrics from "./components/Metrics";
import LogoClouds from "./components/LogoClouds";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <ClientLogo />
      <Feature />
      <Testimonial />
      <Metrics />
      <LogoClouds />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
