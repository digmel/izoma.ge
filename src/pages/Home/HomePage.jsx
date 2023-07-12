import React, { useEffect, useState } from "react";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { IsmobFalseWrapper } from "../../components/IsmobFalseWrapper";
import { ServicesSection } from "../../components/ServicesSection";
import { About } from "../../components/About";
import { FAQSection } from "../../components/FAQ";
import "./style.css";

export const HomePage = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMob(true);
    }
  }, []);

  return (
    <div className="home">
      <Header isMob={isMob} />
      <HeroSection isMob={isMob} />
      <ServicesSection isMob={isMob} />
      <About isMob={isMob} />
      <FAQSection isMob={isMob} />
      <IsmobFalseWrapper isMob={isMob} />
      <ContactSection isMob={isMob} />
      <Footer isMob={isMob} />
    </div>
  );
};
