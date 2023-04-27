/* jshint esversion: 6 */
import React from "react";
import qoute from "./assets/qoute.png";
import hubspotBig from "./assets/hubspot-big.png";
import airbnbBig from "./assets/airbnb-big.png";
import starpiBig from "./assets/strapi-big.png";
import qouteMark from "./assets/Quote mark.png";

function Testimonial() {
  return (
    <section class="section--mint">
      <div class="container">
        <div class="testimonial">
          <div class="qoute">
            <img src={qoute} alt=""></img>
          </div>
          <div class="testimonial__left">
            <div class="section-hedding">
              <h2 class="title-testimonial">
                Real Stories from Real Customers
              </h2>
              <p class="discription">Get inspired by these stories.</p>
            </div>

            <div class="client-card">
              <div class="profile-logo">
                <img src={hubspotBig} alt=""></img>
              </div>
              <div class="content">
                <div class="graphic">
                  <img src={qouteMark} alt=""></img>
                </div>
                <div class="feedback">
                  <p class="feedback-block">
                    To quickly start my startup landing page design, I was
                    looking for a landing page UI Kit. Landify is one of the
                    best landing page UI kit I have come across. It’s so
                    flexible, well organised and easily editable.
                  </p>
                  <div class="person-details">
                    <p class="client-name">Floyd Miles</p>
                    <p class="client-position">Vice President, GoPro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial__right">
            <div class="client-card">
              <div class="profile-logo">
                <img src={airbnbBig} alt=""></img>
              </div>
              <div class="content">
                <div class="graphic">
                  <div class="graphic-element">
                    <img src={qouteMark} alt=""></img>
                  </div>
                </div>
                <div class="feedback">
                  <p class="feedback-block">
                    I used landify and created a landing page for my startup
                    within a week. The Landify UI Kit is simple and highly
                    intuitive, so anyone can use it.
                  </p>
                  <div class="person-details">
                    <p class="client-name">Jane Cooper</p>
                    <p class="client-position">CEO, Airbnb</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="client-card">
              <div class="profile-logo">
                <img src={starpiBig} alt=""></img>
              </div>
              <div class="content">
                <div class="graphic">
                  <div class="graphic-element">
                    <img src={qouteMark} alt=""></img>
                  </div>
                </div>
                <div class="feedback">
                  <p class="feedback-block">
                    Landify saved our time in designing my company page.
                  </p>
                  <div class="person-details">
                    <p class="client-name">Kristin Watson</p>
                    <p class="client-position">Co-Founder, Strapi</p>
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

export default Testimonial;
