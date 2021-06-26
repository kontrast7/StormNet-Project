import React from "react";
import "./style.css";

import Line from "../Line";
import Img1 from "../../Pic/BigSlider/black/1.jpg";
import Img2 from "../../Pic/BigSlider/black/2.jpg";

class WhyChoose extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="why-choose-container">
            <div className="why-choose-title">Why Choose TheFox Business</div>
            <div className="why-choose-line">
              <Line />
            </div>
            <div className="why-choose-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </div>

            <div className="why-choose-cards-wrapper">
              <div className="why-choose-card">
                <img
                  src={Img1}
                  class="img-fluid why-choose-card-img"
                  alt="..."
                ></img>
                <div className="why-choose-card-title">
                  We Think Different. We Do The Best Ever
                </div>
                <div className="why-choose-card-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>

              <div className="why-choose-card">
                <img
                  src={Img2}
                  class="img-fluid why-choose-card-img"
                  alt="..."
                ></img>
                <div className="why-choose-card-title">
                  We Think Different. We Do The Best Ever
                </div>
                <div className="why-choose-card-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>
            <div className="why-choose-link">Learn more about us</div>
          </div>
        </div>
      </>
    );
  }
}

export default WhyChoose;
