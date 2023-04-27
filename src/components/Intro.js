/* jshint esversion: 6 */
import React from "react";
import videoIcon from "./assets/video-icon.png";
import Phone from "./assets/Mobile.png";

function Intro() {
  return (
    <section className="section--intro">
      <div className="container">
        <div className="intro">
          <div className="intro-content">
            <div className="intro-text">
              <h1 className="title">The easiest way to manage projects</h1>
              <p className="description-hero">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
            <div className="cta">
              <button className="button-get">Get Started</button>
              <button className="button-watch">
                <img src={videoIcon} alt="" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="intro-mockup">
            <img src={Phone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
