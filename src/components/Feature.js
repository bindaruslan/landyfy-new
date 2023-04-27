/* jshint esversion: 6 */
import React from "react";
import robust from "./assets/robust.png";
import flexibility from "./assets/flexibility.png";
import user from "./assets/user.png";
import multiple from "./assets/multiple.png";
import better from "./assets/better.png";
import well from "./assets/well.png";

function Feature() {
  return (
    <section class="section">
      <div class="container">
        <div class="feature">
          <div class="heading-one">
            <h2 class="title-feature">Tailor-made features</h2>
            <p class="description-feature">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </p>
          </div>
          <div class="row-container">
            <div class="row-one">
              <div class="card">
                <div class="icon-card">
                  <img src={robust} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">Robust workflow</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="icon-card">
                  <img src={flexibility} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">Flexibility</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="icon-card">
                  <img src={user} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">User friendly</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div class="row-two">
              <div class="card">
                <div class="icon-card">
                  <img src={multiple} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">Multiple layouts</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="icon-card">
                  <img src={better} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">Better components</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="icon-card">
                  <img src={well} alt=""></img>
                </div>
                <div class="card-content">
                  <h3 class="headline">Well organised</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
