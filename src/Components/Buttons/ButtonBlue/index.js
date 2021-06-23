import React from "react";
import "./style.css";
import Lamp from "../../../Pic/Home/Btn/lamp.png";

class ButtonBlue extends React.Component {
  render() {
    return (
      <button className="button-blue">
        <img src={Lamp} className="lamp" alt="lamp"></img>
        TAKE A TOUR
      </button>
    );
  }
}

export default ButtonBlue;
