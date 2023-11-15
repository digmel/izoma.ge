import React, { useState } from "react";
import "./style.css";

export const Menu = ({
  text = "Home",
  text1 = "Services",
  text2 = "About",
  text3 = "News",
  text4 = "Map Search",
}) => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="menu">
      <a
        className={`menu-item  ${activeSection === "home" ? "bold" : ""}`}
        onClick={() => scrollToSection("home")}
      >
        {text}
      </a>

      <div
        className={`menu-item  ${activeSection === "services" ? "bold" : ""}`}
        onClick={() => scrollToSection("services")}
      >
        {text1}
      </div>

      <div
        className={`menu-item  ${activeSection === "about" ? "bold" : ""}`}
        onClick={() => scrollToSection("about")}
      >
        {text2}
      </div>
      <div
        className={`menu-item  ${activeSection === "news" ? "bold" : ""}`}
        onClick={() => scrollToSection("news")}
      >
        {text3}
      </div>
      <div
        className={`menu-item  ${
          activeSection === "map-section" ? "bold" : ""
        }`}
        onClick={() => scrollToSection("map-section")}
      >
        {text4}
      </div>
    </div>
  );
};
