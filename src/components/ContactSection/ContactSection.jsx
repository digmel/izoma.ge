import PropTypes from "prop-types";
import React from "react";
import { Envelopeicon3 } from "../../icons/Envelopeicon3";
import { Facebookicon2 } from "../../icons/Facebookicon2";
import { Facebookicon3 } from "../../icons/Facebookicon3";
import { Phoneicon2 } from "../../icons/Phoneicon2";
import { Phoneicon3 } from "../../icons/Phoneicon3";
import { ContactForm } from "../ContactForm";
import "./style.css";

export const ContactSection = ({ isMob }) => {
  return (
    <div id="contact" className={`contact-section is-mob-5-${isMob}`}>
      {!isMob && (
        <div className="contact-section-wrapper">
          <div className="div-4">
            <div className="item-2">კონტაქტი</div>
            <div className="contact">
              <ContactForm
                className="contact-form-instance"
                inputLabelClassName="contact-form-2"
                inputLabelClassNameOverride="contact-form-2"
                inputLabelIClassName="contact-form-2"
                inputLabelIClassNameOverride="contact-form-2"
                inputText="სახელი, გვარი"
                inputText1="ტელეფონი"
                inputText2="იმეილი"
                inputText3="მესიჯი"
              />
              <div className="description-3">
                <div className="item-3">
                  <div className="icon-bg">
                    <Phoneicon3 className="instance-node-2" />
                  </div>
                  <p className="text-wrapper-3">+995 595 50 80 10</p>
                </div>
                <div className="item-3">
                  <div className="icon-bg">
                    <Envelopeicon3 className="instance-node-2" />
                  </div>
                  <div className="text-wrapper-3">izoma.info@gmail.com</div>
                </div>
                <a className="item-3" href="https://www.facebook.com/aizoma">
                  <div className="icon-bg">
                    <Facebookicon3 className="instance-node-2" />
                  </div>
                  <div className="text-wrapper-3">facebook.com/iZoma.Ge</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMob && (
        <>
          <div className="item-4">კონტაქტი</div>
          <div className="contact-2">
            <div className="description-4">
              <div className="item-5">
                <div className="icon-bg-3">
                  <Phoneicon2 className="instance-node-3" />
                </div>
                <p className="text-wrapper-4">+995 595 50 80 10</p>
              </div>

              <div className="item-6">
                <div className="icon-bg-3">
                  <Envelopeicon3 className="instance-node-3" />
                </div>
                <div className="text-wrapper-4">izoma.info@gmail.com</div>
              </div>

              <a className="item-7" href="https://www.facebook.com/iZoma.Ge/">
                <div className="icon-bg-3">
                  <Facebookicon2 className="instance-node-3" />
                </div>
                <a className="text-wrapper-4">facebook.com/iZoma.Ge</a>
              </a>
            </div>

            <ContactForm
              className="contact-form-5"
              inputLabelClassName="contact-form-2"
              inputLabelClassNameOverride="contact-form-2"
              inputLabelIClassName="contact-form-2"
              inputLabelIClassNameOverride="contact-form-2"
              inputStateDefaultFillClassName="contact-form-4"
              inputStateDefaultFillClassNameOverride="contact-form-4"
              inputStateFocusedFillClassName="contact-form-4"
              inputText="სახელი, გვარი"
              inputText1="ტელეფონი"
              inputText2="იმეილი"
              inputText3="მესიჯი"
            />
          </div>
        </>
      )}
    </div>
  );
};

ContactSection.propTypes = {
  isMob: PropTypes.bool,
  iconBg: PropTypes.string,
};
