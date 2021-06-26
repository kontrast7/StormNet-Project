import React, { Component } from "react";
import "./style.css";
import Line from "../Line";
import ButtonBlue from "../Buttons/ButtonBlue";

class IncredibleSkills extends Component {
  render() {
    return (
      <>
        <div className="inc-skill-bg">
          <div className="container">
            <div className="inc-skill-wrapper">
              <div className="inc-skill-title">Incredible Skills</div>
              <Line />
              <div className="inc-skill-subtitle">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Nulla vehicula nibh vel ante commodo feugiat.
              </div>
              <div className="inc-skill-text">
                Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
                Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
                vestibulum, eget mattis ex fermentum. Donec placerat felis sit
                amet venenatis faucibus. Praesent aliquet convallis.
              </div>

              <div className="inc-skill-progress">
                <div className="inc-skill-progress-title">Web Design</div>
                <div className="inc-skill-progress-bg">
                  <div className="inc-skill-progress-grad1"></div>
                </div>
              </div>
              <div className="inc-skill-progress">
                <div className="inc-skill-progress-title">
                  WordPress Development
                </div>
                <div className="inc-skill-progress-bg">
                  <div className="inc-skill-progress-grad2"></div>
                </div>
              </div>
              <div className="inc-skill-progress">
                <div className="inc-skill-progress-title">
                  SEO & Online Marketing
                </div>
                <div className="inc-skill-progress-bg">
                  <div className="inc-skill-progress-grad3"></div>
                </div>
              </div>
              <div className="inc-skill-progress">
                <div className="inc-skill-progress-title">Mobile Apps</div>
                <div className="inc-skill-progress-bg">
                  <div className="inc-skill-progress-grad4"></div>
                </div>
              </div>
              <div className="btn-inc">
                <ButtonBlue />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IncredibleSkills;
