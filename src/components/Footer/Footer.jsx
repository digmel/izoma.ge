import PropTypes from "prop-types";
import React from "react";
import { Arrowicon1 } from "../../icons/Arrowicon1";
import { Logo } from "../../icons/Logo";
import "./style.css";

export const Footer = ({ isMob }) => {
  return (
    <div className={`footer is-mob-6-${isMob}`}>
      <div className="logo-2">
        {!isMob && (
          <>
            <Logo className="logo-default-7" monochrome />
            <div className="copyrights">
              <img
                className="copyrights-icon"
                alt="Copyrights icon"
                src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/copyrightsicon-1.svg"
              />
              <p className="copyrights-2">2010 - 2023 ყველა უფლება დაცულია</p>
            </div>
          </>
        )}

        {isMob && (
          <>
            <div className="element-16">გამოიწერე სიახლეები</div>
            <div className="input-3">
              <div className="base-input-wrapper">
                <div className="input-field-wrapper">
                  <div className="input-field-2">
                    <div className="txt">Email Address</div>
                    <div className="arrow-icon" />
                  </div>
                </div>
              </div>
              <div className="arrow-icon-wrapper">
                <Arrowicon1 className="arrow-icon" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="subscribe">
        {!isMob && (
          <>
            <div className="element-17">გამოიწერე სიახლეები</div>
            <div className="input-3">
              <div className="base-input-wrapper">
                <div className="input-field-wrapper">
                  <div className="input-field-2">
                    <div className="txt">Email Address</div>
                    <div className="arrow-icon" />
                  </div>
                </div>
              </div>
              <div className="arrow-icon-wrapper">
                <Arrowicon1 className="arrow-icon" />
              </div>
            </div>
          </>
        )}

        {isMob && (
          <>
            <div className="logo-light">
              <Logo className="logo-default-8" monochrome />
            </div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/line-38.svg"
            />
            <div className="copy">
              <div className="frame-3">
                <img
                  className="vector-2"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/vector-1.svg"
                />
                <div className="copyrights-3">2010 - 2023</div>
              </div>
              <div className="copyrights-4">ყველა უფლება დაცულია</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Footer.propTypes = {
  isMob: PropTypes.bool,
  logoDefaultKey: PropTypes.string,
  logoDefaultRing: PropTypes.string,
};
