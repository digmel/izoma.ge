/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Article = ({
  className,
  image = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-9@2x.png",
  descriptionClassName,
  titleClassName,
  text = "Title",
  text1 = "Date",
  imageClassName,
}) => {
  return (
    <div className={`article ${className}`}>
      <img className={`image-3 ${imageClassName}`} alt="Image" src={image} />
      <div className={`description-2 ${descriptionClassName}`}>
        <div className={`title-3 ${titleClassName}`}>{text}</div>
        <div className="date">{text1}</div>
      </div>
    </div>
  );
};

Article.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
