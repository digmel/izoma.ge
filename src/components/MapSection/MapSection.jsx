import React from "react";
import { Button } from "../Button";
import { Clockicon2 } from "../../icons/Clockicon2";
import "./style.css";

export const MapSection = ({ isMob }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="map-section" className="map-section">
      <h1 className="title">საკადასტრო კოდით ძებნა</h1>
      <h3 className="subtitle">
        ჩვენს რუკაზე ძებნა შესაძლებელია რეგიონის, ადგილმდებარეობისა და
        საკადასტრო კოდის მიხედვით.
      </h3>
      <iframe
        src="https://maps.gov.ge/map/portal/"
        width="100%"
        height="90%"
        style={{
          border: "4px",
          borderWidth: 4,
          borderRadius: 16,
          borderColor: "#4545",
        }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};
