import React from "react";
import { Button } from "../Button";
import { NewsCard } from "../NewsCard";
import { SliderContainer } from "../SliderContainer";
import "./style.css";

// TODO: Fix usage of NewsCard components and than rename it to be just BlogCard,
// Create mock data object with different title, description and images and loop through that.
// Implement "load more" action.

export const Blog = () => {
  return (
    <div className="blog">
      <div className="title-4">სიახლეები</div>
      <NewsCard
        className="news-card-instance"
        hasCompanies={false}
        labelClassName="news-card-2"
      />
      <div className="news-card-3">
        <div className="cover-2">
          <img
            className="image-3"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/image-1.png"
          />
          <SliderContainer className="slider-container-3" />
        </div>
        <div className="description-3">
          <div className="header-3">
            <div className="title-i">მთიელი წიგნები აჭარაში</div>
            <div className="label-i">15 მაისი, 2023</div>
          </div>
          <p className="body-i">
            დიდი ხანი ვემზადებოდით ამ გასვლისთვის. ვიცოდით, ყველაზე ბევრი ბავშვი
            მაღალმთიან აჭარაში დაგვხვდებოდა. წიგნებს ვყიდულობდით, ვაგროვებდით,
            გვჩუქნიდნენ და ნელ-ნელა ივსებოდა ჩვენი ოთახი... ბოლოს კი ფეხის
            დასადგმელი ადგილიც აღარ დაგვრჩა...
          </p>
          <div className="statistics-3">
            <div className="div-8">
              <div className="element-i">3 500</div>
              <div className="i">წიგნი</div>
            </div>
            <div className="div-8">
              <div className="element-i">1 200</div>
              <div className="i">გახარებული ბავშვი</div>
            </div>
            <div className="div-8">
              <div className="element-i">5</div>
              <div className="i">დონორი</div>
            </div>
          </div>
          <div className="companies-2">
            <img
              className="company-3"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-01-2@2x.png"
            />
            <img
              className="company-4"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-02-2@2x.png"
            />
            <img
              className="company-4"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-03-2@2x.png"
            />
            <img
              className="company-5"
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/company-04-1.svg"
            />
          </div>
        </div>
        <img
          className="noise-right"
          alt="Noise right"
          src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/noiseright-1.png"
        />
      </div>
      <Button requestAnEstimateClassName="button-4" text="იხილე მეტი" />
    </div>
  );
};
