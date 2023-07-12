/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoDefault = ({
  ring = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-5.svg",
  key = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-6.svg",
  name = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name-6.svg",
  className,
  overlapClassName,
  overlapGroupClassName,
  ringClassName,
  keyClassName,
  nameClassName,
}) => {
  return (
    <div className={`logo-default ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className={`ring ${ringClassName}`} alt="Ring" src={ring} />
          <img className={`key ${keyClassName}`} alt="Key" src={key} />
        </div>
        <img className={`name ${nameClassName}`} alt="Name" src={name} />
      </div>
    </div>
  );
};

LogoDefault.propTypes = {
  ring: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
};
