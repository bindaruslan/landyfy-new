/* jshint esversion: 6 */
import React from "react";
import Landify from "./assets/Logo.png";
import googleplay from "./assets/googleplay-footer.png";
import appstore from "./assets/appstore-footer.png";
import styles from "./module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="inner">
          <div className="inner-left">
            <div className="logo">
              <img src={Landify} alt=""></img>
            </div>
            <nav className="nav">
              <a className="nav__link--black" href="http://example.com">
                Features
              </a>
              <a className="nav__link--black" href="http://example.com">
                Pricing
              </a>
              <a className="nav__link--black" href="http://example.com">
                Careers
              </a>
              <a className="nav__link--black" href="http://example.com">
                Help
              </a>
            </nav>
          </div>
          <div className="inner-right">
            <a className="badges-link" href="http://example.com">
              <img src={googleplay} alt="Get it on Google Play" />
            </a>
            <a className="badges-link" href="http://example.com">
              <img src={appstore} alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
