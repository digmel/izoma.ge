import React from "react";
import { Logo } from "../../icons/Logo";
import "./style.css";
import { AnimatedText } from "../../components/AnimatedText";
import { LogoDefault } from "../../components/LogoDefault";

export default function IntroPage() {
  return (
    <div className="intro-wrapper">
      <LogoDefault />
      <AnimatedText text="საიტი მალე დაემატება!" />
    </div>
  );
}
