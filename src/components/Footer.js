/* jshint esversion: 6 */
import React from "react";
import logomark from "./assets/landy-logo.png";
import googleFooter from "./assets/googleplay-footer.png";
import appFooter from "./assets/appstore-footer.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="basement">
          <div class="left-section">
            <div class="logomark">
              <img src={logomark} alt=""></img>
            </div>
            <div class="links">
              <nav class="links-row-one">
                <a class="nav__link" href="example.com">
                  Download Now
                </a>
                <a class="nav__link" href="example.com">
                  License
                </a>
              </nav>
              <nav class="links-row-two">
                <a class="nav__link" href="http://example.com">
                  About
                </a>
                <a class="nav__link" href="http://example.com">
                  Features
                </a>
                <a class="nav__link" href="http://example.com">
                  Pricing
                </a>
                <a class="nav__link" href="http://example.com">
                  Careers
                </a>
                <a class="nav__link" href="http://example.com">
                  Help
                </a>
                <a class="nav__link" href="http://example.com">
                  Contact
                </a>
              </nav>
            </div>
            <p class="copyright-text">
              © 2021 Landify UI Kit. All rights reserved
            </p>
          </div>
          <div class="download-badges">
            <p class="app-get">Get the App</p>
            <div class="store-badges">
              <img src={googleFooter} alt=""></img>
            </div>
            <div class="store-badges">
              <img src={appFooter} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
