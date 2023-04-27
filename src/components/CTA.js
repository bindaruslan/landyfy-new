/* jshint esversion: 6 */
import React from "react";
import mocOne from "./assets/Phone Mockup 1.png";
import mocTwo from "./assets/Phone Mockup 2.png";
import googleFooter from "./assets/googleplay-footer.png";
import appFooter from "./assets/appstore-footer.png";

function CTA() {
  return (
    <section class="section--seafoam">
      <div class="container">
        <div class="ctas">
          <div class="content-ctas">
            <div class="section-hedding-ctas">
              <h2 class="title">Manage all projects from your mobile</h2>
              <p class="discription">
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </p>
            </div>
            <div class="get-app">
              <div class="app-heading">
                <h3 class="get-app-title">Get the App</h3>
              </div>
              <div class="badge-app">
                <a class="badge" href="http://example.com">
                  <img src={googleFooter} alt=""></img>{" "}
                </a>
                <a class="badge" href="http://example.com">
                  <img src={appFooter} alt=""></img>
                </a>
              </div>
            </div>
          </div>
          <div class="cta-img">
            <div class="phone-moc-one">
              <img src={mocOne} alt="Phone one"></img>
            </div>
            <div class="phone-moc-two">
              <img src={mocTwo} alt="Phone two"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
