import React from "react";
import "./style.css";

import Line from "../Line";

class SelectedCase extends React.Component {
  render() {
    return (
      <>
        <div className="sel-case-container">
          <div className="sel-case-title">Selected Case Studies</div>
          <div className="sel-case-line">
          <Line />
          </div>
          <div className="sel-case-text">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.</div>
        </div>
      </>
    );
  }
}

export default SelectedCase;
