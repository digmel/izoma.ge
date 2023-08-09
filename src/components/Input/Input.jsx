/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BaseInput } from "../BaseInput";
import "./style.css";

export const Input = ({
  fill = true,
  state,
  fill1,
  labelClassName,
  text = "Label",
  className,
  baseInputClassName,
  inputFieldClassName,
}) => {
  return (
    <div className={`input ${className}`}>
      {["default", "disabled", "error", "success"].includes(state) && (
        <div className={`base-input-2 ${baseInputClassName}`}>
          <div className={`label-i ${labelClassName}`}>{text}</div>
          <input className={`icon-wrapper state-${state} fill-${fill1} ${inputFieldClassName}`}>
            {/* <div className="icon-2" /> */}
          </input>
          {["error", "success"].includes(state) && <div className={`message state-1-${state}`}>Error Message</div>}
        </div>
      )}

      {state === "focused" && (
        <BaseInput
          className="base-input-instance"
          inputFieldClassName="base-input-4"
          labelClassName="base-input-3"
          showIcon={false}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  fill: PropTypes.bool,
  state: PropTypes.oneOf(["default", "success", "focused", "error", "disabled"]),
  fill1: PropTypes.bool,
  text: PropTypes.string,
};
