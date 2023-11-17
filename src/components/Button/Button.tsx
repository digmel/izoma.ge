import React from "react";
import * as SC from "./styles";

type TButtonProps = {
  text?: string;
  onClick: () => void;
};

export const Button: React.FC<TButtonProps> = ({
  text = "კონტაქტი",
  onClick,
}) => {
  return (
    <SC.Button onClick={onClick}>
      <SC.Text>{text}</SC.Text>
    </SC.Button>
  );
};
