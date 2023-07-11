import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PhoneWrapper = ({ className }) => {
  return <div className={`phone-wrapper ${className}`} />;
};

PhoneWrapper.propTypes = {
  className: PropTypes.string,
};
