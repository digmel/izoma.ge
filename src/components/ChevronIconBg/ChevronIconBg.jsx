/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Chevronicon7 } from "../../icons/Chevronicon7";
import "./style.css";

export const ChevronIconBg = ({ className, icon = <Chevronicon7 className="chevron-icon" /> }) => {
  return <div className={`chevron-icon-bg ${className}`}>{icon}</div>;
};
