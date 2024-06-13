import React, { useEffect, useState } from "react";
import { ContactSection } from "../../components/ContactSection";
import { HeroSection } from "../../components/HeroSection";
import { IsmobFalseWrapper } from "../../components/IsmobFalseWrapper";
import { ServicesSection } from "../../components/ServicesSection";
import { About } from "../../components/About";
import { MapSection } from "../../components/MapSection";
import { FAQSection } from "../../components/FAQ";
import { Layout } from "../../components/Layout";
import "./style.css";

export const HomePage = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMob(true);
    }
  }, []);

  return (
    <Layout>
      <div className="home" id="home">
        <HeroSection isMob={isMob} />
        <ServicesSection isMob={isMob} />
        <About isMob={isMob} />
        <MapSection isMob={isMob} />
        <FAQSection isMob={isMob} />
        <IsmobFalseWrapper isMob={isMob} />
        <ContactSection isMob={isMob} />
      </div>
    </Layout>
  );
};
