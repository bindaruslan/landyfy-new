/* jshint esversion: 6 */
import React from "react";
import logoOne from "./assets/LogoOne.png";
import logoTwo from "./assets/LogoTwo.png";
import logoThree from "./assets/LogoThree.png";
import logoFour from "./assets/LogoFour.png";
import logoFive from "./assets/LogoFive.png";
import logoSix from "./assets/LogoSix.png";
import logoSeven from "./assets/LogoSeven.png";

function LogoClouds() {
  return (
    <section class="section">
      <div class="container">
        <div class="logo-clouds">
          <div class="divider-cloud"></div>
          <div class="cloud-content">
            <div class="section-hedding-cloud">
              <h2 class="title">Easy integrations with 170+ tools</h2>
              <p class="discription">
                Connect Landify with your favourite tools that you use daily and
                keep things on track.
              </p>
            </div>
            <div class="cloud-container">
              <div class="cloud-img">
                <div class="cloud-row-one">
                  <div class="cloud-item">
                    <img src={logoOne} alt=""></img>
                  </div>
                  <div class="cloud-item">
                    <img src={logoTwo} alt=""></img>
                  </div>
                  <div class="cloud-item">
                    <img src={logoThree} alt=""></img>
                  </div>
                  <div class="cloud-item">
                    <img src={logoFour} alt=""></img>
                  </div>
                </div>
                <div class="cloud-row-two">
                  <div class="cloud-item">
                    <img src={logoFive} alt=""></img>
                  </div>
                  <div class="cloud-item">
                    <img src={logoSix} alt=""></img>
                  </div>
                  <div class="cloud-item">
                    <img src={logoSeven} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoClouds;
