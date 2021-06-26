import React from "react";

import Img from "../../Pic/Footer/Group_6.png";
import "./style.css";
import Icon1 from "../../Pic/Footer/fb.png";
import Icon2 from "../../Pic/Footer/in.png";
import Icon3 from "../../Pic/Footer/pint.png";
import Icon4 from "../../Pic/Footer/twit.png";
import Icon5 from "../../Pic/Footer/vimeo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-bg1">
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-logo">
                <img src={Img} alt="footer" className="footer-logo-img"></img>
                <div className="footer-logo-title">thefox PLUS</div>
                <div className="footer-logo-subtitle">MADE FOR BUSINESS</div>
              </div>
              <div className="footer-card">
                <div className="footer-title">Postal Address</div>
                <div className="footer-item">PO Box 16122 Collins Street</div>
                <div className="footer-item">West</div>
                <div className="footer-item">Victoria 8007</div>
                <div className="footer-item">Australia</div>
              </div>
              <div className="footer-card">
                <div className="footer-title">Envato Headquarters</div>
                <div className="footer-item">121 King Street,</div>
                <div className="footer-item">Melbourne</div>
                <div className="footer-item">Victoria 3000</div>
                <div className="footer-item">Australia</div>
              </div>
              <div className="footer-card">
                <div className="footer-title">Tranmautritam</div>
                <div className="footer-item">Tranmautritam@gmail.com</div>
                <div className="footer-item">+84 935 815 989</div>
                <div className="footer-item">tranmautritam.com</div>
                <div className="footer-item">Vietnam</div>
              </div>
            </div>
          </div>
          <div className="footer-line-wrapper">
            <div className="footer-line-text">
              © 2015 All Rights Reserved Tranmautritam - Envato Pty Ltd. Contact
              the Envato Market Help Team.
            </div>
            <div className="footer-line-icons">
              <img src={Icon1} alt="icon" className="icon-foot"></img>
              <img src={Icon2} alt="icon" className="icon-foot"></img>
              <img src={Icon3} alt="icon" className="icon-foot"></img>
              <img src={Icon4} alt="icon" className="icon-foot"></img>
              <img src={Icon5} alt="icon" className="icon-foot"></img>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
