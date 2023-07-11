import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Envelope = ({ className }) => {
  return <div className={`envelope ${className}`} />;
};

Envelope.propTypes = {
  className: PropTypes.string,
};
