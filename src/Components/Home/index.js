import React from "react";
import "./style.css";
import BigSlider from "../BigSlider";

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="slidder">
          <BigSlider />
        </div>
      </>
    );
  }
}

export default Content;
