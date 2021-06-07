import React from "react";
import "./style.css";

import Line from "../Line";
import ButtonBlue from "../Buttons/ButtonBlue";

class GreatTeme extends React.Component {
  render() {
    return (
      <>
        <div className="conatainer-fluid bgc-gray">
          <div className="container bg-great">
            <div className="wrapper-great">
              <div className="title-great">Great Theme for Your Business</div>
              <Line />
              <div className="subtitle-great">
                Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
                viverra. Nulla vehicula nibh vel ante commodo feugiat.
              </div>
              <div className="text-great">
                Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
                Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
                vestibulum, eget mattis ex fermentum. Donec placerat felis sit
                amet venenatis faucibus. Praesent aliquet convallis.
              </div>
              <ButtonBlue />
            </div>
          </div>
          <div className="rectangle-great"></div>
        </div>
      </>
    );
  }
}

export default GreatTeme;
