/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Error = ({ className }) => {
  return (
    <svg
      className={`error ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.99954 5.99995V8.49995M1.79755 10.7506C1.22021 11.7506 1.94221 13 3.09621 13H12.9029C14.0562 13 14.7782 11.7506 14.2015 10.7506L9.29888 2.25195C8.72154 1.25195 7.27754 1.25195 6.70021 2.25195L1.79755 10.7506ZM7.99954 10.5H8.00421V10.5053H7.99954V10.5Z"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
