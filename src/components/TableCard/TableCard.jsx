import PropTypes from "prop-types";
import React from "react";
import "./style.css";

// TODO: just fix this card and parameters, also UI to have all same width

export const TableCard = ({ text = "subtitle", text1 = "9 430" }) => {
  return (
    <div className="table-card">
      <div className="title">{text1}</div>
      <div className="subtitle">{text}</div>
    </div>
  );
};

TableCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
