import React, { useState } from "react";
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
  const [activeSection, setActiveSection] = useState(null);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="menu">
      <div className={`text-wrapper-2 ${homeClassName}  ${activeSection === "home" ? "bold" : ""}`} onClick={() => scrollToSection("home")}>
        {text}
      </div>
      <div className={`text-wrapper-2 ${servicesClassName}  ${activeSection === "services" ? "bold" : ""}`} onClick={() => scrollToSection("services")}>
        {text1}
      </div>
      <div  className={`text-wrapper-2 ${aboutClassName}  ${activeSection === "about" ? "bold" : ""}`}  onClick={() => scrollToSection("about")}>
        {text2}
      </div>
      <div className={`text-wrapper-2 ${newsClassName}  ${activeSection === "news" ? "bold" : ""}`}  onClick={() => scrollToSection("news")}>
        {text3}
      </div>
      <Button className="button-instance" text="კონტაქტი" onClick={() => scrollToSection("contact")}  />
    </div>
  );
};
