/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Tick = ({ className }) => {
  return (
    <svg
      className={`tick ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.99966 8.5L6.99966 12.5L12.9997 3.5"
        stroke="#22C55E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
