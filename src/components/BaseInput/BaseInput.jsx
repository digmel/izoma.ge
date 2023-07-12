/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BaseInput = ({ showIcon = true, showMessage, className, labelClassName, inputFieldClassName }) => {
  return (
    <div className={`base-input ${className}`}>
      <div className={`label ${labelClassName}`}>Label</div>
      <div className={`input-field ${inputFieldClassName}`}>{showIcon && <div className="icon" />}</div>
    </div>
  );
};

BaseInput.propTypes = {
  showIcon: PropTypes.bool,
  showMessage: PropTypes.bool,
};
