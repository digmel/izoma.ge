import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Elipse = ({ className, elipseClassName }) => {
  return (
    <div className={`elipse ${className}`}>
      <div className={`div ${elipseClassName}`} />
    </div>
  );
};

Elipse.propTypes = {
  elipseClassName: PropTypes.string,
  className: PropTypes.string,
};
