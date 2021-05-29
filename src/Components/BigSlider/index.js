import React from "react";
import "./style.css";

import ButtonBlack from "../Buttons/ButtonBlack/index";

import Pic1 from "../../Pic/BigSlider/black/1.jpg";
import Pic4 from "../../Pic/BigSlider/black/bg-gray.jpg";

class BigSlider extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pic1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="card-title-slider">DREAM BIG. THINK DIFFERENT</h5>
              <p className="card-subtitle-slider">
                Creating A Website Has Never Been This Easy
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pic4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="card-title-slider">DREAM BIG. THINK DIFFERENT</h5>
              <p className="card-subtitle-slider">
                Creating A Website Has Never Been This Easy
              </p>
              <div className="d-grid gap-2 d-md-block">
                <ButtonBlack />
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    );
  }
}

export default BigSlider;
