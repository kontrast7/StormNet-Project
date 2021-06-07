import React from "react";
import "./style.css";
import Button from "../Buttons/ButtonTransparent";

class BecomeAPart extends React.Component {
  render() {
    return (
      <>
        <div className="become-a-part">
          <div className="container">
            <div className="become-content">
              <div className="become-text">
                Become A Part Of TheFox Business Community Today
              </div>
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BecomeAPart;
