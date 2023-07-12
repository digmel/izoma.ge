/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BlogSection } from "../BlogSection";
import "./style.css";

export const IsmobFalseWrapper = ({ isMob, className }) => {
  return (
    <div className={`ismob-false-wrapper is-mob-2-${isMob} ${className}`}>
      <div className="bg-3" />
      <img
        className="bg-texture"
        alt="Bg texture"
        src={
          isMob
            ? "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/vector.svg"
            : "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/bgtexture-1.svg"
        }
      />
      <BlogSection
        articleArticleClassName={`${isMob ? "class-10" : "class-11"}`}
        articleArticleClassNameOverride={`${!isMob && "class"}`}
        articleDescriptionClassName={`${isMob ? "class-6" : "class-7"}`}
        articleDivClassName={`${!isMob && "class"}`}
        articleDivClassNameOverride={`${!isMob && "class"}`}
        articleImage={
          isMob
            ? "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-16@2x.png"
            : "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-18@2x.png"
        }
        articleImage1={
          isMob
            ? "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-16@2x.png"
            : undefined
        }
        articleImageClassName={`${isMob ? "class-2" : "class-3"}`}
        articleImageClassNameOverride={`${isMob && "class-4"}`}
        articleImg={
          isMob
            ? "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-16@2x.png"
            : undefined
        }
        articleImgClassName={`${isMob && "class-5"}`}
        articleListClassName={`${isMob ? "class-8" : "class-9"}`}
        articleText={isMob ? "მიწის აზომვის სრული პროცედურა" : "მიწის ნაკვეთის აზომვის სრული პროცედურები"}
        className={`${isMob ? "class-12" : "class-13"}`}
        titleClassName={`${isMob ? "class-14" : "class-15"}`}
      />
    </div>
  );
};

IsmobFalseWrapper.propTypes = {
  isMob: PropTypes.bool,
};
