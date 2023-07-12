/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./style.css";

export const ContactForm = ({
  className,
  inputText = "Full name",
  inputLabelClassName,
  inputText1 = "Phone",
  inputLabelClassNameOverride,
  inputText2 = "Email",
  inputLabelIClassName,
  inputText3 = "Message",
  inputLabelIClassNameOverride,
  buttonButtonClassName,
  inputStateDefaultFillClassName,
  inputStateDefaultFillClassNameOverride,
  inputStateFocusedFillClassName,
}) => {
  return (
    <div className={`contact-form ${className}`}>
      <Input
        className={inputStateDefaultFillClassName}
        fill1
        labelClassName={inputLabelClassName}
        state="default"
        text={inputText}
      />
      <Input
        className={inputStateDefaultFillClassNameOverride}
        fill1
        labelClassName={inputLabelClassNameOverride}
        state="default"
        text={inputText1}
      />
      <Input
        className={inputStateFocusedFillClassName}
        fill1
        labelClassName={inputLabelIClassName}
        state="default"
        text={inputText2}
      />
      <Input
        baseInputClassName="design-component-instance-node"
        className="input-instance"
        fill1
        inputFieldClassName="input-2"
        labelClassName={inputLabelIClassNameOverride}
        state="default"
        text={inputText3}
      />
      <Button className={buttonButtonClassName} text="გაგზავნა" />
    </div>
  );
};

ContactForm.propTypes = {
  inputText: PropTypes.string,
  inputText1: PropTypes.string,
  inputText2: PropTypes.string,
  inputText3: PropTypes.string,
};
