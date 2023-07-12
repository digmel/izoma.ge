import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { IsmobFalseWrapper } from "../../components/IsmobFalseWrapper";
import { ServicesSection } from "../../components/ServicesSection";

import { About } from "../../components/About";
import { FAQSection } from "../../components/FAQ";

export const HomePage = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMob(true);
    }
  }, []);

  return (
    <div className="home">
      <Header
        isMob={isMob}
        logoDefaultKey="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key.svg"
        logoDefaultName="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name.svg"
        logoDefaultRing="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-1.svg"
      />
      <HeroSection
        isMob={isMob}
        statisticsImg="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03@2x.png"
        statisticsLogo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04.svg"
      />

      <ServicesSection isMob={isMob} />

      <About />
      <FAQSection />

      <IsmobFalseWrapper isMob={isMob} />

      <ContactSection
        iconBg="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/iconbg.svg"
        isMob={isMob}
      />

      <Footer
        isMob={isMob}
        logoDefaultKey="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-2.svg"
        logoDefaultRing="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-2.svg"
      />
    </div>
  );
};
