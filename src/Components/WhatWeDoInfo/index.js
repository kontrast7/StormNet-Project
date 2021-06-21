import React from "react";
import "./style.css";
import Btn from "../Buttons/ButtonBlue";
import Line from "../Line";

class WhatWeDo extends React.Component {
  render() {
    return (
    
        <div className="WhatWeDo">
          <div className="what-title">What We Do</div>
          <Line />
          <div className="what-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.
          </div>
          <div className="what-subtitle2">
            TheFox include design that can be used for any type of website:
            business, corporate, portfolio, blog, products, magazine, etc. Buy
            TheFox and join our awesome community, let’s make TheFox better
            together!
          </div>
          <ul className="what-ul">
            <li className="what-li">
              Clean, modern, multi-purpose design can be used for any type of
              website
            </li>
            <li className="what-li">
              The New Ultimate Multi-Purpose WordPress Theme
            </li>
            <li className="what-li">WordPress 4.1 Tested and Approved</li>
            <li className="what-li">Built with HTML5 and CSS3</li>
            <li className="what-li">
              SEO Optimized, Well organized, commented & clean code
            </li>
            <li className="what-li">
              Cross-Browser Compatibility: Chrome, Firefox, Safari, IE9 ~ IE11
            </li>
            <li className="what-li">100% Responsive Theme</li>
            <li className="what-li">
              Comes with the Visual Composer, most awesome visual page builder
            </li>
          </ul>
          <div className="what-btn">
            <Btn />
          </div>
        </div>
    );
  }
}

export default WhatWeDo;
