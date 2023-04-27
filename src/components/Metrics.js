/* jshint esversion: 6 */
import React from "react";
import robust from "./assets/robust.png";
import users from "./assets/users.png";
import client from "./assets/client.png";
import countries from "./assets/countries.png";

function Metrics() {
  return (
    <section class="section">
      <div class="container">
        <div class="metrics">
          <div class="section-hedding">
            <h2 class="title">Our 18 years of achievements</h2>
            <p class="discription">
              With our super powers we have reached this
            </p>
          </div>
          <div class="metrics-promo">
            <div class="row-first">
              <div class="item">
                <div class="icon">
                  <img src={robust} alt="robust"></img>
                </div>
                <div class="metrics-details">
                  <div class="numbers">10,000+</div>
                  <div class="details">
                    <p class="description">Downloads per day</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img src={users} alt="users"></img>
                </div>
                <div class="metrics-details">
                  <div class="numbers">2 Million</div>
                  <div class="details">
                    <p class="description">Users</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-second">
              <div class="item">
                <div class="icon">
                  <img src={client} alt="client"></img>
                </div>
                <div class="metrics-details">
                  <div class="numbers">500+</div>
                  <div class="details">
                    <p class="description">Clients</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img src={countries} alt="countries"></img>
                </div>
                <div class="metrics-details">
                  <div class="numbers">140</div>
                  <div class="details">
                    <p class="description">Countries</p>
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

export default Metrics;
