/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Article } from "../Article";
import "./style.css";

export const BlogSection = ({
  isMob,
  className,
  titleClassName,
  articleListClassName,
  articleArticleClassName,
  articleDescriptionClassName,
  articleText = "მიწის აზომვის სრული პროცედურა",
  articleArticleClassNameOverride,
  articleDivClassName,
  articleDivClassNameOverride,
  articleImageClassName,
  articleImage = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-10@2x.png",
  articleImageClassNameOverride,
  articleImg = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-20@2x.png",
  articleImgClassName,
  articleImage1 = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-19@2x.png",
}) => {
  return (
    <div className={`blog-section ${className}`}>
      <div className={`title-4 ${titleClassName}`}>
        გაეცანი მიწის აზომვასთან
        <br />
        დაკავშირებულ სიახლეებს
      </div>
      <div className={`article-list ${articleListClassName}`}>
        <Article
          className={articleArticleClassName}
          descriptionClassName={articleDescriptionClassName}
          image="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-21@2x.png"
          text={articleText}
          text1="ივნისი 24, 2023"
          titleClassName="article-instance"
        />
        {!isMob && (
          <>
            <Article
              className={articleArticleClassNameOverride}
              image={articleImg}
              imageClassName={articleImageClassNameOverride}
              text="როდის არის საჭირო ნაკვეთის აზომვა და ნახაზის მომზადება?"
              text1="ივნისი 10, 2023"
              titleClassName="article-instance"
            />
            <Article
              className={articleDivClassName}
              image={articleImage1}
              imageClassName={articleImgClassName}
              text="რა არის გასათვალისწინებელი ბინის აზომვისას?"
              text1="მარტი 11, 2023"
              titleClassName="article-instance"
            />
            <Article
              className={articleDivClassName}
              image={articleImage1}
              imageClassName={articleImgClassName}
              text="რა არის გასათვალისწინებელი ბინის აზომვისას?"
              text1="მარტი 11, 2023"
              titleClassName="article-instance"
            />
          </>
        )}
      </div>
    </div>
  );
};

BlogSection.propTypes = {
  articleText: PropTypes.string,
  articleImage: PropTypes.string,
  articleImg: PropTypes.string,
  articleImage1: PropTypes.string,
};
