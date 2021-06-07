import React from "react";
import "./style.css";
import BigSlider from "../BigSlider";
import Responsive from "../Responsive";
import GreatTeme from "../GreatTheme";
import SelectedCase from "../SelectedCase";
import PlateBlock from "../PlateBlock";
import Become from "../BecomeAPart";

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="slidder">
          <BigSlider />
        </div>
        <div className="circle-responsive">
          <Responsive />
        </div>
        <div className="great-theme">
          <GreatTeme />
        </div>
        <div className="sel-case">
          <SelectedCase />
        </div>
        <div className="plate-block">
          <PlateBlock />
        </div>
        <div className="become-block">
          <Become />
        </div>
      </>
    );
  }
}

export default Content;
