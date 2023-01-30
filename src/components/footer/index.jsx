import React from "react";
import twitter from "../../asset/images/Twitter.png";
import facebook from "../../asset/images/Facebook.png";
import instagram from "../../asset/images/Instagram.png";
import youtube from "../../asset/images/Youtube.png";
import giiftlogo from "../../asset/images/Giift Logo.png";

const Footer = () => {
  return (
    <div className="container-fluid footers ftr-bg">
      <div className="container">
        <div className="row footRow">
          <div className="col-sm-6 col-md-3 divRgt">
            <div className="social-icons">
              <a className="mx-2" href="https://twitter.com/BankofKigali">
                <img src={twitter} />
              </a>
              <a className="mx-2" href="https://www.facebook.com/BankofKigali">
                <img src={facebook} />
              </a>
              <a className="mx-2" href="https://www.instagram.com/BankofKigali.Co/">
                <img src={instagram} />
              </a>
              <a
                className="mx-2"
                href="https://www.youtube.com/channel/UCqmk7hJyss06MofCMSZXeMQ"
              >
                <img src={youtube} />
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-6 divLft py-4 py-md-0">
            <ul className="list-unstyled1 nav-bar">
              <li>
                <a className="nav-link1" href="#0">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link1" href="#0">
                  Earn
                </a>
              </li>
              <li>
                <a
                  className="nav-link1"
                  href="#0"
                >
                  Redeem
                </a>
              </li>
              <li>
                <a className="nav-link1" href="#0">
                  FAQ's
                </a>{" "}
              </li>
              <li>
                <a
                  className="nav-link1"
                  href="#0"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  className="nav-link1"
                  href="#0"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="nav-link1"
                  href="#0"
                >
                  Booking Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 footRow">
          <div className="col-sm-6 col-md-6 divRgt">
            <div className="footers-logo">
              <p className="poweredby-txt">Powered By</p>
              <a href="http://giift.com/" target="_blank">
                <img src={giiftlogo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 copyright">
            <p className="text-muted">
              <span className="text-footer">
                © 2022 | All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
