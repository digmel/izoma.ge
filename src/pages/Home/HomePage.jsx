import React, { useEffect } from "react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Statistics } from "../../components/Statistics";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const HomePage = () => {
  const navigate = useNavigate();

  // TODO: Remove this to make responsive work.
  // Work-around to now show UI on mobile while working on responsive design
  useEffect(() => {
    if (window.screen.width < 768) {
      navigate("/");
    }
  }, []);
  return (
    <div className="Wrapper">
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Blog />
      <Footer />
    </div>
  );
};
