import PropTypes from "prop-types";
import React from "react";
import { SliderContainer } from "../SliderContainer";
import "./style.css";

//TODO: fix this to be re-usable component

export const NewsCard = ({
  className,
  labelClassName,
  hasCompanies = true,
}) => {
  return (
    <div className={`news-card ${className}`}>
      <div className="description-2">
        <div className="header-2">
          <div className="title-3">მთიელი წიგნები სვანეთში</div>
          <div className={`label ${labelClassName}`}>15 მაისი, 2023</div>
        </div>
        <p className="body">
          სხვა პასუხისმგებლობაც გვქონდა ამ გასვლაში - დათო ტურაშვილი იქნებოდა
          ჩვენ გვერდით. ერთია როცა წიგნი მიგაქვს ბავშვებთან, მაგრამ სხვა
          გრძნობაა როცა მათი საყვარელი ავტორიც თან მიგყავს. არ დაგიმალავთ, ცოტას
          ვღელავდით. ყველაფერმა კი ისე ჩაიარა, ერთმანეთს ვეკითხებოდით ნუთუ,
          ასეთი ლამაზი დღეები მართლა გამოგვივიდაო?!
        </p>
        <div className="statistics-2">
          <div className="div-7">
            <div className="element-5">3 500</div>
            <div className="element-6">წიგნი</div>
          </div>
          <div className="div-7">
            <div className="element-5">1 200</div>
            <div className="element-6">გახარებული ბავშვი</div>
          </div>
          <div className="div-7">
            <div className="element-5">5</div>
            <div className="element-6">დონორი</div>
          </div>
        </div>
        {hasCompanies && (
          <div className="companies">
            <img
              className="company"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-01-2@2x.png"
            />
            <img
              className="img"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-02-2@2x.png"
            />
            <img
              className="img"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-03-2@2x.png"
            />
            <img
              className="company-2"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-04-2.svg"
            />
          </div>
        )}
      </div>
      <div className="cover">
        <img
          className="image-2"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/image-6.png"
        />
        <SliderContainer className="slider-container-2" />
      </div>
      <img
        className="noise-left"
        alt="Noise left"
        src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/noiseleft-2.png"
      />
    </div>
  );
};

NewsCard.propTypes = {
  hasCompanies: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};
