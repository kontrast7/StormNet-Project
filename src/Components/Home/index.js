import React from "react";
import "./style.css";
import BigSlider from "../BigSlider";
import Responsive from "../Responsive";
import GreatTeme from "../GreatTheme";
import SelectedCase from "../SelectedCase";
import PlateBlock from "../PlateBlock";
import Become from "../BecomeAPart";
import MultipleLayouts from "../MultipleLayouts";
import StatBlock from "../StatBlock";
import Carousel from "../Carousel";
import WhatWeDo from "../WhatWeDo";
import WhatWeDoInfo from "../WhatWeDoInfo";
import BestPartners from "../TheBestPartners";

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
        <div className="multiple-layouts-block">
          <MultipleLayouts />
        </div>
        <div className="state-color-block">
          <StatBlock />
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="what-block">
          <div className="what1">
            <WhatWeDoInfo />
          </div>
          <div className="what2">
            <WhatWeDo />
          </div>
        </div>
        <div className="best-partners">
          <BestPartners />
        </div>
      </>
    );
  }
}

export default Content;
