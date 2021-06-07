import React from "react";
import "./style.css";
import item1 from "../../Pic/Home/Info/Display_Icon.png";
import item2 from "../../Pic/Home/Info/Setting_Icon.png";
import item3 from "../../Pic/Home/Info/Design_Icon.png";
import item4 from "../../Pic/Home/Info/Support_Icon.png";

class Responsive extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="item1">
              <div className="item1-img">
                <img className="item1-pic" src={item1} />
              </div>
              <div className="item1-title">100% Responsive</div>
              <div className="item1-text">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                lobortis orci gravida volutpat.
              </div>
            </div>
            <div className="item2">
              <div className="item2-img">
                <img className="item1-pic" src={item3} />
              </div>
              <div className="item2-title">Powerfull Admin</div>
              <div className="item2-text">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                lobortis orci gravida volutpat.
              </div>
            </div>
            <div className="item3">
              <div className="item3-img">
                <img className="item1-pic" src={item3} />
              </div>
              <div className="item3-title">Incredible Design</div>
              <div className="item3-text">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                lobortis orci gravida volutpat.
              </div>
            </div>
            <div className="item4">
              <div className="item4-img">
                <img className="item1-pic" src={item4} />
              </div>
              <div className="item4-title">The Best Support</div>
              <div className="item4-text">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                lobortis orci gravida volutpat.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Responsive;
