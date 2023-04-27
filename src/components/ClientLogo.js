/* jshint esversion: 6 */
import React from "react";
import airbnb from "./assets/airbnb.png";
import hubspot from "./assets/hubspot.png";
import google from "./assets/google-logo.png";
import microsoft from "./assets/microsoft.png";
import walmart from "./assets/walmart.png";
import fedex from "./assets/fedex.png";
import divider from "./assets/Divider.png";

function ClientLogo() {
  return (
    <section class="section">
      <div class="container">
        <div class="client-logo">
          <div class="divider-top">
            <img src={divider} alt="" />
          </div>
          <div class="image-row">
            <img src={airbnb} alt=""></img>
            <img src={hubspot} alt=""></img>
            <img src={google} alt=""></img>
            <img src={microsoft} alt=""></img>
            <img src={walmart} alt=""></img>
            <img src={fedex} alt=""></img>
          </div>
          <div class="divider-bottom">
            <img src={divider} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogo;
