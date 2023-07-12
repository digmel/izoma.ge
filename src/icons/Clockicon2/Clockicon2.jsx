/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Clockicon2 = ({ color = "#6B7280", className }) => {
  return (
    <svg
      className={`clockicon-2 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 5.5V10.5H13.75M17.5 10.5C17.5 11.4849 17.306 12.4602 16.9291 13.3701C16.5522 14.2801 15.9997 15.1069 15.3033 15.8033C14.6069 16.4997 13.7801 17.0522 12.8701 17.4291C11.9602 17.806 10.9849 18 10 18C9.01509 18 8.03982 17.806 7.12987 17.4291C6.21993 17.0522 5.39314 16.4997 4.6967 15.8033C4.00026 15.1069 3.44781 14.2801 3.0709 13.3701C2.69399 12.4602 2.5 11.4849 2.5 10.5C2.5 8.51088 3.29018 6.60322 4.6967 5.1967C6.10322 3.79018 8.01088 3 10 3C11.9891 3 13.8968 3.79018 15.3033 5.1967C16.7098 6.60322 17.5 8.51088 17.5 10.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

Clockicon2.propTypes = {
  color: PropTypes.string,
};
