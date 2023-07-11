/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  className,
  requestAnEstimateClassName,
  text = "დონაცია",
}) => {
  return (
    <div className={`button ${className}`}>
      <div className={`request-an-estimate ${requestAnEstimateClassName}`}>
        {text}
      </div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  requestAnEstimateClassName: PropTypes.string,
};
