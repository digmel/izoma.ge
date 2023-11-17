import PropTypes from "prop-types";
import React from "react";
import { Statistics } from "../Statistics";
import "./style.css";
import { motion } from "framer-motion";

export const HeroSection = ({
  isMob,
  statisticsLogo = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04-3.svg",
  statisticsImg = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03-3@2x.png",
}) => {
  return (
    <div className={`hero-section is-mob-${isMob}`}>
      {!isMob && (
        <>
          <div className="image">
            <motion.div
              initial={{ zoom: 0.95 }} // Initial scale (zoomed out)
              animate={{ zoom: 1.1 }} // Final scale (zoomed in)
              transition={{
                duration: 12, // Duration of the animation in seconds
                ease: "easeInOut", // Easing function for smooth animation
              }}
              style={{
                height: "800px",
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/image-7.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </div>

          <div className="hero-desciption">
            <div className="hero-text">
              <h1 className="p">
                აზომვით სამუშაოები მთელი საქართველოს მასშტაბით
              </h1>
              <h2 className="element-4">
                აზომვა სრულდება მაღალი სიზუსტის თანამედროვე აპარატურით, ნახაზები
                მზადდება საჯარო რეესტრის #388 დადგენილების მიხედვით, რომელიც
                გამოგადგებათ საჯარო რეესტრში ან სხვა ნებისმიერ ორგანოში
                წარსადგენად.
              </h2>
            </div>
            <Statistics
              className="statistics-instance"
              divClassName="instance-node"
              divClassNameOverride="statistics-3"
              elementClassName="instance-node"
              elementClassName1="instance-node"
              elementClassName2="statistics-2"
              elementClassName3="instance-node"
              elementClassName4="statistics-4"
              elementClassNameOverride="statistics-2"
              img="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-02-3@2x.png"
              logo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-01-3@2x.png"
              logo1={statisticsImg}
              logo2={statisticsLogo}
              text="240K"
              text1="13"
              text2="წელი"
              text3="20"
            />
          </div>
        </>
      )}

      {isMob && (
        <div className="hero-desciption-2">
          <div className="hero-text-2">
            <h1 className="element-5">
              აზომვით სამუშაოები მთელი საქართველოს მასშტაბით
            </h1>
            <h2 className="element-6">
              აზომვა სრულდება მაღალი სიზუსტის თანამედროვე აპარატურით, ნახაზები
              მზადდება საჯარო რეესტრის #388 დადგენილების მიხედვით, რომელიც
              გამოგადგებათ საჯარო რეესტრში ან სხვა ნებისმიერ ორგანოში
              წარსადგენად.
            </h2>
          </div>
          <Statistics
            className="statistics-8"
            divClassName="statistics-9"
            divClassNameOverride="statistics-11"
            elementClassName="statistics-9"
            elementClassName1="statistics-9"
            elementClassName2="statistics-10"
            elementClassName3="statistics-9"
            elementClassName4="statistics-12"
            elementClassNameOverride="statistics-10"
            img="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-02-2@2x.png"
            imgClassName="statistics-7"
            imgClassNameOverride="statistics-7"
            logo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-01-2@2x.png"
            logo1="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03-2@2x.png"
            logo2="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04-2.svg"
            logoClassName="statistics-7"
            logoClassNameOverride="statistics-7"
            logosClassName="statistics-6"
            statisticsClassName="statistics-5"
            statisticsClassName1="statistics-5"
            statisticsClassName2="statistics-5"
            statisticsClassNameOverride="statistics-5"
            text="240K"
            text1="13"
            text2="წელი ბაზარზე"
            text3="20"
          />
        </div>
      )}
    </div>
  );
};

HeroSection.propTypes = {
  isMob: PropTypes.bool,
  statisticsLogo: PropTypes.string,
  statisticsImg: PropTypes.string,
};
