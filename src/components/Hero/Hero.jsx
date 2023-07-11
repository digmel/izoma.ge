import React from "react";
import { SliderContainer } from "../SliderContainer";
import "./style.css";

// TODO: implement framer motion slider animation

export const Hero = () => {
  return (
    <div className="section-hero">
      <div className="image-container">
        <img
          className="image"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/image-5.png"
        />
      </div>
      <SliderContainer
        className="slider-icons"
        elipseDivClassName="slider-icons-2"
        elipseDivClassNameOverride="slider-icons-2"
        elipseElipseClassName="slider-container-instance"
        elipseElipseClassNameOverride="design-component-instance-node"
        elipseElipseWrapperClassName="slider-container-instance"
        elipseElipseWrapperClassNameOverride="slider-container-instance"
      />
    </div>
  );
};
