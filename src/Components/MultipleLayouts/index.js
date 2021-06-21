import React from "react";
import "./style.css";
import Case from "../../Pic/Home/Advantages/case.png";
import Crown from "../../Pic/Home/Advantages/crown.png";
import Lay from "../../Pic/Home/Advantages/lay.png";
import Options from "../../Pic/Home/Advantages/options.png";
import Seo from "../../Pic/Home/Advantages/seo.png";
import Time from "../../Pic/Home/Advantages/time.png";

class MultipleLayouts extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="multiple-layouts-wrapper">

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Lay} alt="Lay"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Multiple Layouts</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Crown} alt="Crown"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Modern Designs</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Case} alt="Case"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Powerful Shopping</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Time} alt="Time"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Incredible Support</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Seo} alt="Seo"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Optimized for SEO</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

            <div className="multiple-layouts-module">
              <img className="multiple-layouts-ico" src={Options} alt="Options"></img>
              <div className="multiple-layouts-text">
                <div className="multiple-layouts-title">Flexible Admin Options</div>
                <div className="multiple-layouts-subscribe">
                  Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                  viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
                  lobortis orci gravida volutpat.
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default MultipleLayouts;
