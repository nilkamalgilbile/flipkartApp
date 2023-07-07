import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footerBlock">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="footerAbout">
                <div className="footerTitle">ABOUT</div>
                <ul>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Corporate Information</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="footerHelp">
                <div className="footerTitle">HELP</div>
                <ul>
                  <li>Payments</li>
                  <li>Shipping</li>
                  <li>Cancellation & Returns</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="footerSocial">
                <div className="footerTitle">Social Links</div>
                <div className="socialLinks">
                  <a href="#" className="socialIcon">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="socialIcon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="socialIcon">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className="socialIcon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="socialIcon">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr id="hrLine" />
          <div className="copyright">&copy; 2023 Nilkamal Gilbile</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
