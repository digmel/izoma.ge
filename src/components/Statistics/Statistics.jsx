import React from "react";
import { TableCard } from "../TableCard";
import "./style.css";

// TODO: Change map image and fix responsiveness.

export const Statistics = () => {
  return (
    <div className="section-statistics">
      <div className="text-wrapper">შედეგები</div>
      <div className="table">
        <TableCard text="შეგროვილი თანხა ₾" text1="9 430" />
        <TableCard text="წიგნი" text1="10 324" />
        <TableCard text="დონორი" text1="400" />
        <TableCard text="გახარებული ბავშვი" text1="12 400" />
      </div>
      <div className="map-container">
        <img
          className="map"
          alt="Map"
          src="https://generation-sessions.s3.amazonaws.com/c5862879395293bf1542f21c77c8039d/img/map-1.png"
        />
      </div>
    </div>
  );
};
