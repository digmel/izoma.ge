import React from "react";
import { Button } from "../Button";
import "./style.css";
import { Logo } from "../../icons/Logo";

// TODO: Replace Button with correct implementation
// Make it responsive with hamburger icon

export const Header = () => {
  return (
    <div className="header">
      <div className="container-start">
        <Logo />
      </div>
      <div className="container-end">
        <div className="menu-item, menu-item-active">მთავარი</div>
        <div className="menu-item">ჩვენ შესახებ</div>
        <div className="menu-item">სიახლეები</div>
        {/* <Button
          className="button-instance"
          requestAnEstimateClassName="design-component-instance-node"
          text="ავტორიზაცია"
        />*/}
        <Button requestAnEstimateClassName="button-2" text="დონაცია" />
      </div>
    </div>
  );
};
