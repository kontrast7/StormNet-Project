import React from "react";
import "./style.css";

import Line from "../Line";

class TheBestPartners extends React.Component {
  render() {
    return (
      <div className="partners-bg">
      <div className="container partners-padd">

        
        <div className="partners-title">The Best Partners</div>
        <div className="partners-line">
          <Line />
        </div>
        <div className="partners-subtitle">
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
          Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className="best-part">
          <div className="p1"></div>
          <div className="p2"></div>
          <div className="p3"></div>
          <div className="p4"></div>
          <div className="p5"></div>
          <div className="p6"></div>
          <div className="p7"></div>
          <div className="p8"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default TheBestPartners;
