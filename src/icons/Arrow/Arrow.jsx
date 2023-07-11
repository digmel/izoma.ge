import PropTypes from "prop-types";
import React from "react";

export const Arrow = ({ className }) => {
  return (
    <svg
      className={`arrow-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
};
