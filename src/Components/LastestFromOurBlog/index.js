import React from "react";
import "./style.css";

import Line from "../Line";

class LastestFromOurBlog extends React.Component {
  render() {
    return (
      <>
        <div className="lastest-wrapper">
          <div className="container">
            <div className="lastest-title">Lastest From Our Blog</div>
            <div className="lastest-line">
              <Line />
            </div>
            <div className="lastest-subtitle">
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Nulla vehicula nibh vel ante commodo feugiat.
            </div>

            <div class="lastest-card-container">
              <div class="lastest-card-item1">
                <div className="lastest-card-item-text">
                  <div className="lastest-card-item-title">
                    This CEO is taking on the biggest banks on Wall Street — and
                    winning
                  </div>
                  <div className="lastest-card-item-data">
                    by Robinson Greig / 25th June 2020
                  </div>
                </div>
              </div>

              <div class="lastest-card-item2">
                <div className="lastest-card-item-text">
                  <div className="lastest-card-item-title">
                    Google employee dies in an accident at the Cannes Lions
                    advertising festival
                  </div>
                  <div className="lastest-card-item-data">
                    by Robinson Greig / 25th June 2020
                  </div>
                </div>
              </div>

              <div class="lastest-card-item3">
                <div className="lastest-card-item-text">
                  <div className="lastest-card-item-title">
                    How a tweet turned Uber's first hire into a billionaire
                  </div>
                  <div className="lastest-card-item-data">
                    by Robinson Greig / 25th June 2020
                  </div>
                </div>
              </div>
            </div>

            <div className="lastest-link">Check All Latest Articles</div>
          </div>
        </div>
      </>
    );
  }
}

export default LastestFromOurBlog;
