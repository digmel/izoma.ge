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
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="menu">
      <div className={`text-wrapper-2 ${homeClassName}`} onClick={() => scrollToSection("home")}>
        {text}
      </div>
      <div className={`text-wrapper-2 ${servicesClassName}`} onClick={() => scrollToSection("services")}>
        {text1}
      </div>
      <div  className={`text-wrapper-2 ${aboutClassName}`}  onClick={() => scrollToSection("about")}>
        {text2}
      </div>
      <div className={`text-wrapper-2 ${newsClassName}`}  onClick={() => scrollToSection("news")}>
        {text3}
      </div>
      <Button className="button-instance" text="კონტაქტი" onClick={() => scrollToSection("contact")}  />
    </div>
  );
};
