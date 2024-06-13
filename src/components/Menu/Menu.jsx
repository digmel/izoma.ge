import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";

export const Menu = ({
  text = "Home",
  text1 = "Services",
  text2 = "About",
  text3 = "News",
  text4 = "Map Search",
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

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

  const handleMenuClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    scrollToSection(sectionId);

    if (sectionId === "news") {
      navigate(`/blogs`);
    } else {
      navigate(`/`);
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="menu">
      <a
        href="#home"
        className={`menu-item  ${activeSection === "home" ? "bold" : ""}`}
        onClick={(e) => handleMenuClick(e, "home")}
      >
        {text}
      </a>

      <a
        href="#services"
        className={`menu-item  ${activeSection === "services" ? "bold" : ""}`}
        onClick={(e) => handleMenuClick(e, "services")}
      >
        {text1}
      </a>

      <a
        href="#about"
        className={`menu-item  ${activeSection === "about" ? "bold" : ""}`}
        onClick={(e) => handleMenuClick(e, "about")}
      >
        {text2}
      </a>

      <a
        href="#news"
        className={`menu-item  ${activeSection === "news" ? "bold" : ""}`}
        onClick={(e) => handleMenuClick(e, "news")}
      >
        {text3}
      </a>

      <a
        href="#map-section"
        className={`menu-item  ${
          activeSection === "map-section" ? "bold" : ""
        }`}
        onClick={(e) => handleMenuClick(e, "map-section")}
      >
        {text4}
      </a>
    </div>
  );
};
