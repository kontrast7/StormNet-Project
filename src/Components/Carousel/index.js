import React from "react";
import "./style.css";

import Line from "../Line";

import Pic4 from "../../Pic/BigSlider/black/bg-gray.jpg";

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleCaptionsSlide"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsSlide"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsSlide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pic4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="card-title-slider2">
                This is the best WordPress theme I have used to date...
                Incredible Customizability and it is Incredible to work with I
                took a project I couldnt complete and Completed it with this
                theme in one day. Thanks guys!
              </h5>
              <div className="line-block">
              <Line/>
              </div>
              <p className="card-subtitle-slider2">
                Creating A Website Has Never Been This Easy
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pic4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="card-title-slider2">DREAM BIG. THINK DIFFERENT</h5>
              <p className="card-subtitle-slider2">
                Creating A Website Has Never Been This Easy
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
