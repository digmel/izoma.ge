/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Statistics } from "../Statistics";
import "./style.css";

export const HeroSection = ({
  isMob,
  className,
  statisticsLogo = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04-3.svg",
  statisticsImg = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03-3@2x.png",
}) => {
  return (
    <div className={`hero-section is-mob-${isMob} ${className}`}>
      {!isMob && (
        <>
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-7.png"
          />
          <div className="hero-desciption">
            <div className="hero-text">
              <p className="p">აზომვით სამუშაოები მთელი საქართველოს მასშტაბით</p>
              <p className="element-4">
                აზომვა სრულდება მაღალი სიზუსტის თანამედროვე აპარატურით, ნახაზები მზადდება საჯარო რეესტრის #388
                დადგენილების მიხედვით, რომელიც გამოგადგებათ საჯარო რეესტრში ან სხვა ნებისმიერ ორგანოში წარსადგენად.
              </p>
            </div>
            <Statistics
              className="statistics-instance"
              divClassName="instance-node"
              divClassNameOverride="statistics-3"
              elementClassName="instance-node"
              elementClassName1="instance-node"
              elementClassName2="statistics-2"
              elementClassName3="instance-node"
              elementClassName4="statistics-4"
              elementClassNameOverride="statistics-2"
              img="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-02-3@2x.png"
              logo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-01-3@2x.png"
              logo1={statisticsImg}
              logo2={statisticsLogo}
              text="240K"
              text1="13"
              text2="წელი"
              text3="20"
            />
          </div>
        </>
      )}

      {isMob && (
        <div className="hero-desciption-2">
          <div className="hero-text-2">
            <p className="element-5">აზომვით სამუშაოები მთელი საქართველოს მასშტაბით</p>
            <p className="element-6">
              აზომვა სრულდება მაღალი სიზუსტის თანამედროვე აპარატურით, ნახაზები მზადდება საჯარო რეესტრის #388
              დადგენილების მიხედვით, რომელიც გამოგადგებათ საჯარო რეესტრში ან სხვა ნებისმიერ ორგანოში წარსადგენად.
            </p>
          </div>
          <Statistics
            className="statistics-8"
            divClassName="statistics-9"
            divClassNameOverride="statistics-11"
            elementClassName="statistics-9"
            elementClassName1="statistics-9"
            elementClassName2="statistics-10"
            elementClassName3="statistics-9"
            elementClassName4="statistics-12"
            elementClassNameOverride="statistics-10"
            img="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-02-2@2x.png"
            imgClassName="statistics-7"
            imgClassNameOverride="statistics-7"
            logo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-01-2@2x.png"
            logo1="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03-2@2x.png"
            logo2="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04-2.svg"
            logoClassName="statistics-7"
            logoClassNameOverride="statistics-7"
            logosClassName="statistics-6"
            statisticsClassName="statistics-5"
            statisticsClassName1="statistics-5"
            statisticsClassName2="statistics-5"
            statisticsClassNameOverride="statistics-5"
            text="240K"
            text1="13"
            text2="წელი ბაზარზე"
            text3="20"
          />
        </div>
      )}
    </div>
  );
};

HeroSection.propTypes = {
  isMob: PropTypes.bool,
  statisticsLogo: PropTypes.string,
  statisticsImg: PropTypes.string,
};
