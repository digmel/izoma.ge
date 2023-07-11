import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Facebook = ({ className }) => {
  return <div className={`facebook ${className}`} />;
};

Facebook.propTypes = {
  className: PropTypes.string,
};
