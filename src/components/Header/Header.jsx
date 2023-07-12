/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menuicon } from "../../icons/Menuicon";
import { LogoDefault } from "../LogoDefault";
import { Menu } from "../Menu";
import "./style.css";

export const Header = ({
  isMob,
  className,
  logoDefaultKey = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-6.svg",
  logoDefaultName = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name-6.svg",
  logoDefaultRing = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring.svg",
}) => {
  return (
    <div className={`header is-mob-0-${isMob} ${className}`}>
      {!isMob && (
        <>
          <div className="logo-default-wrapper">
            <LogoDefault key={logoDefaultKey} name={logoDefaultName} ring={logoDefaultRing} />
          </div>
          <Menu
            aboutClassName="menu-instance"
            homeClassName="menu-instance"
            newsClassName="menu-instance"
            servicesClassName="menu-instance"
            text="მთავარი"
            text1="სერვისები"
            text2="ჩვენ შესახებ"
            text3="ბლოგი"
          />
        </>
      )}

      {isMob && (
        <>
          <div className="logo-wrapper">
            <div className="logo-default-instance-wrapper">
              <LogoDefault
                className="logo-default-6"
                key="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-5.svg"
                keyClassName="logo-default-4"
                name="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name-5.svg"
                nameClassName="logo-default-5"
                overlapClassName="logo-default-instance"
                overlapGroupClassName="logo-default-2"
                ring="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-6.svg"
                ringClassName="logo-default-3"
              />
            </div>
          </div>
          <div className="menu-icon-wrapper">
            <Menuicon className="menu-icon" />
          </div>
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  isMob: PropTypes.bool,
  logoDefaultKey: PropTypes.string,
  logoDefaultName: PropTypes.string,
  logoDefaultRing: PropTypes.string,
};
