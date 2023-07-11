import PropTypes from "prop-types";
import React from "react";
import { Elipse } from "../Elipse";
import "./style.css";

export const SliderContainer = ({ className }) => {
  return (
    <div className={`slider-container ${className}`}>
      <Elipse className="elipse-instance" elipseClassName="elipse-2" />
      <Elipse className="elipse-instance" />
      <Elipse className="elipse-instance" />
    </div>
  );
};

SliderContainer.propTypes = {
  className: PropTypes.string,
};
