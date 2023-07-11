import React from "react";
import { Logo } from "../../icons/Logo";
import "./style.css";
import { AnimatedText } from "../../components/AnimatedText";

export default function IntroPage() {
  return (
    <div className="wrapper">
      <Logo />
      <AnimatedText text="საიტი მალე დაემატება!" />
    </div>
  );
}
