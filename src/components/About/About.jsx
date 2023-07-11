import React from "react";
import { Button } from "../Button";
import "./style.css";

// TODO: install i18n for all text content and create translations.json file

export const About = () => {
  return (
    <div className="about">
      <div className="title">ვინ ვართ ჩვენ?</div>
      <p className="description">
        ბოლო რამდენიმე წელია ტრადიციად გვექცა რომ ლაშქრობის დროს მთაში მცხოვრები
        ბავშვებისთვის წიგნები ჩავიტანოთ. მიღებულმა შედეგებმა გვაფიქრებინა, რომ
        უფრო მასშტაბური გაგვეხადა ეს ყველაფერი. ახლა კი, მთიელი წიგნების
        მიზანია, შევიძინოთ, შევაგროვოთ საინტერესო და სასურველი ლიტერატურა მთიელი
        მოზარდებისათვის.
      </p>
      <Button requestAnEstimateClassName="button-3" text="დონაცია" />
    </div>
  );
};
