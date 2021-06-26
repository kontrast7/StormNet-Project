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
import Carousel2 from "../Carousel2";
import WhatWeDo from "../WhatWeDo";
import WhatWeDoInfo from "../WhatWeDoInfo";
import BestPartners from "../TheBestPartners";
import Rectangle from "../Rectangle";
import PricingTables from "../PricingTables";
import WhyChoose from "../WhyChoose";
import IncredibleSkills from "../IncredibleSkills";
import LastestFromOurBlog from "../LastestFromOurBlog";
import Footer from "../Footer";

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
          <Rectangle />
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
        <div className="great-theme2">
          <div className="great-theme2-text">
            <GreatTeme />
          </div>
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
        <div className="pricing-block">
          <PricingTables />
        </div>
        <div className="video1">
          <div className="container-fluid11">
            <iframe
              width="100%"
              height="800"
              src="https://www.youtube.com/embed/l6W1Xx24698?controls=0"
              title="Bussines-Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="become-block">
          <Become />
        </div>
        <div className="why-choose-block">
          <div className="why1">
            <WhyChoose />
          </div>
          <div className="why2">
            <IncredibleSkills />
          </div>
        </div>
        <Carousel2 />
        <LastestFromOurBlog />
        <div className="become-block">
          <Become />
        </div>
        <Footer/>
      </>
    );
  }
}

export default Content;
