/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Menu = ({
  homeClassName,
  text = "Home",
  servicesClassName,
  text1 = "Services",
  aboutClassName,
  text2 = "About",
  newsClassName,
  text3 = "News",
}) => {
  return (
    <div className="menu">
      <div className={`text-wrapper-2 ${homeClassName}`}>{text}</div>
      <div className={`text-wrapper-2 ${servicesClassName}`}>{text1}</div>
      <div className={`text-wrapper-2 ${aboutClassName}`}>{text2}</div>
      <div className={`text-wrapper-2 ${newsClassName}`}>{text3}</div>
      <Button className="button-instance" text="კონტაქტი" />
    </div>
  );
};

Menu.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
