import React from "react";
import "./style.css";
import styled from "styled-components";

class StatBlock extends React.Component {
  render() {
    const LineSmall = styled.div`
      margin: 0 auto;
      width: 30px;
      height: 1px;
      background-color: #000000;
      background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
      margin-top: 20px;
      margin-bottom: 20px;
    `;
    return (
      <>
        <div className="state-block-bg">
          <div className="state-block-content">
            <div className="state-green">
              <div className="state-green-int">966</div>
              <LineSmall />
              <div className="state-sub">Support Ticket Solved</div>
            </div>
            <div className="state-blue">
              <div className="state-blue-int">20K</div>
              <LineSmall />
              <div className="state-sub">Purchases</div>
            </div>
            <div className="state-red">
              <div className="state-red-int">1832</div>
              <LineSmall />
              <div className="state-sub">Cafe Cups </div>
            </div>
            <div className="state-salat">
              <div className="state-salat-int">1.2M</div>
              <LineSmall />
              <div className="state-sub">Facebook Likes</div>
            </div>
            <div className="state-fiol">
              <div className="state-fiol-int">10K</div>
              <LineSmall />
              <div className="state-sub">Tweets</div>
            </div>
            <div className="state-orange">
              <div className="state-orange-int">+18K</div>
              <LineSmall />
              <div className="state-sub">Comments</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StatBlock;
