import React from "react";
import "./style.css";

import Line from "../Line";
import ButtonBlueGet from "../Buttons/ButtonBlueGet";
import ButtonGreenGet from "../Buttons/ButtonGreenGet";
import PricingImg from "../../Pic/Home/Pricing/accept.png";

class PricingTables extends React.Component {
  render() {
    return (
      <>
        <div className="partners-title">Pricing Tables</div>

        <div className="partners-line">
          <Line />
        </div>
        <div className="partners-subtitle">
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
          Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className="container">
          <div className="pricing-wrapper">
            <div className="price-module">
              <div className="price-module-title">Personal</div>
              <div className="price-line">
                <Line />
              </div>

              <div className="price-module-subtitle">
                From<span className="price-module-money"> $99 </span>Per Months
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  01 PSD Pack
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  01 WordPress Install
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  100 Support Ticket
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
              </div>

              <div className="price-btn-block">
                <ButtonBlueGet />
              </div>
            </div>

            <div className="price-module">
              <div className="prise-module-head">
                <div className="recomendet-text">Recommend</div>
                <div className="recomendet-line"></div>
                <div className="price-module-title">Business</div>
                <div className="price-line">
                  <Line />
                </div>

                <div className="price-module-subtitle">
                  From<span className="price-module-money"> $599 </span>Per
                  Months
                </div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  05 PSD Pack
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  10 WordPress Install
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  1000 Support Ticket
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
              </div>

              <div className="price-btn-block">
                <ButtonGreenGet />
              </div>
            </div>

            <div className="price-module">
              <div className="price-module-title">Ultimate</div>
              <div className="price-line">
                <Line />
              </div>

              <div className="price-module-subtitle">
                From<span className="price-module-money"> $999 </span>Per Months
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  10 PSD Pack
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  30 WordPress Install
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
                <div className="grey-line"></div>
              </div>

              <div className="price-module-item">
                <div className="price-module-item-title">
                  <img
                    src={PricingImg}
                    className="price-module-item-img"
                    alt="img"
                  ></img>
                  Support Unlimited
                </div>
                <div className="price-module-item-subtitle">
                  Curabitur ac lacus arcu. Sed vehicula <br></br> lectus auctor
                  viverra. Vehicula.
                </div>
              </div>

              <div className="price-btn-block">
                <ButtonBlueGet />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PricingTables;
