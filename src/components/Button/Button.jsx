
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ className, text = "კონტაქტი", onClick }) => {
  return (
    <div className={`button ${className}`} onClick={()=>onClick()}>
      <div className="element-7">{text}</div>
    </div>
  );
};
