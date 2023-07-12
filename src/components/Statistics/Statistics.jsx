/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Statistics = ({
  className,
  elementClassName,
  text = "24K",
  elementClassNameOverride,
  divClassName,
  text1 = "15",
  divClassNameOverride,
  text2 = "წელი ბაზარზე",
  elementClassName1,
  elementClassName2,
  elementClassName3,
  text3 = "9",
  elementClassName4,
  logo = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-01-1@2x.png",
  img = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-02-1@2x.png",
  logo1 = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03-1@2x.png",
  logo2 = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04-1.svg",
  statisticsClassName,
  statisticsClassNameOverride,
  statisticsClassName1,
  statisticsClassName2,
  logosClassName,
  logoClassName,
  logoClassNameOverride,
  imgClassName,
  imgClassNameOverride,
}) => {
  return (
    <div className={`statistics ${className}`}>
      <div className="numbers">
        <div className={`div ${statisticsClassName}`}>
          <div className={`element ${elementClassName}`}>{text}</div>
          <div className={`text-wrapper ${elementClassNameOverride}`}>აზომილი მ²</div>
        </div>
        <div className={`div ${statisticsClassNameOverride}`}>
          <div className={`element ${divClassName}`}>{text1}</div>
          <div className={`element-2 ${divClassNameOverride}`}>{text2}</div>
        </div>
        <div className={`div-2 ${statisticsClassName1}`}>
          <div className={`element ${elementClassName1}`}>584</div>
          <div className={`text-wrapper ${elementClassName2}`}>პროექტი</div>
        </div>
        <div className={`div ${statisticsClassName2}`}>
          <div className={`element ${elementClassName3}`}>{text3}</div>
          <div className={`element-3 ${elementClassName4}`}>გუნდის წევრი</div>
        </div>
      </div>
      <div className={`logos ${logosClassName}`}>
        <img className={`logo ${logoClassName}`} alt="Logo" src={logo} />
        <img className={`img ${logoClassNameOverride}`} alt="Logo" src={img} />
        <img className={`logo ${imgClassName}`} alt="Logo" src={logo1} />
        <img className={`img ${imgClassNameOverride}`} alt="Logo" src={logo2} />
      </div>
    </div>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  logo: PropTypes.string,
  img: PropTypes.string,
  logo1: PropTypes.string,
  logo2: PropTypes.string,
};
