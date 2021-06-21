import React from "react";
import "./style.css";
import Img1 from "../../Pic/Home/WhatWeDo/1.png";
import Img2 from "../../Pic/Home/WhatWeDo/2.png";
import Img3 from "../../Pic/Home/WhatWeDo/3.png";
import Img4 from "../../Pic/Home/WhatWeDo/4.png";
import Img5 from "../../Pic/Home/WhatWeDo/5.png";
import Img6 from "../../Pic/Home/WhatWeDo/6.png";
import Arr from "../../Pic/Home/WhatWeDo/arr2.png";

class WhatWeDo extends React.Component {
  render() {
    return (
      <div className="WhatWeDo-block">
        <div className="what-panel">
          <img src={Img1} className="panel1-img" alt="Img1"></img>
          <div className="panel1-title">Web Design</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
        <div className="what-panel">
          <img src={Img2} className="panel1-img" alt="Img2"></img>
          <div className="panel1-title">Ecommerce</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
        <div className="what-panel">
          <img src={Img3} className="panel1-img" alt="Img3"></img>
          <div className="panel1-title">Video Advertising</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
        <div className="what-panel">
          <img src={Img4} className="panel1-img" alt="Img4"></img>
          <div className="panel1-title">Photography</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
        <div className="what-panel">
          <img src={Img5} className="panel1-img" alt="Img5"></img>
          <div className="panel1-title">Graphic Design</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
        <div className="what-panel">
          <img src={Img6} className="panel1-img" alt="Img6"></img>
          <div className="panel1-title">Support Tools</div>
          <div className="panel1-subtitle">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
          </div>
          <div>
            <a className="what-link" href="#">
              <img className="what-arr" src={Arr} alt="what-arr"></img>
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
