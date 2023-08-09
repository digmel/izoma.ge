import React, { useState } from "react";
import { Menuicon } from "../../icons/Menuicon";
import { LogoDefault } from "../LogoDefault";
import { Menu } from "../Menu";
import "./style.css";
import { Phoneicon1 } from "../../icons/Phoneicon1";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Envelopeicon3 } from "../../icons/Envelopeicon3";

export const Header = ({
  isMob,
  className,
  logoDefaultKey = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-6.svg",
  logoDefaultName = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name-6.svg",
  logoDefaultRing = "https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring.svg",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={`header is-mob-0-${isMob} ${className}`}>
        {!isMob && (
          <>
            <div className="logo-default-wrapper" onClick={reloadPage}>
              <LogoDefault
                key={logoDefaultKey}
                name={logoDefaultName}
                ring={logoDefaultRing}
              />
            </div>
            <Menu
              aboutClassName="menu-instance"
              homeClassName="menu-instance"
              newsClassName="menu-instance"
              servicesClassName="menu-instance"
              text="მთავარი"
              text1="სერვისები"
              text2="ჩვენ შესახებ"
              text3="ბლოგი"
            />
          </>
        )}

        {isMob && (
          <>
            <div className="logo-wrapper">
              <div className="logo-default-instance-wrapper" onClick={reloadPage}>
                <LogoDefault
                  className="logo-default-6"
                  key="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-5.svg"
                  keyClassName="logo-default-4"
                  name="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name-5.svg"
                  nameClassName="logo-default-5"
                  overlapClassName="logo-default-instance"
                  overlapGroupClassName="logo-default-2"
                  ring="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-6.svg"
                  ringClassName="logo-default-3"
                />
              </div>
            </div>
            <div className="menu-icon-wrapper" onClick={toggleMenu}>
              <Menuicon className="menu-icon" />
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <div
          className="menu"
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "100vh",
            padding: "8px",
            flexDirection: "column",
          }}
        >
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div
                  className="item"
                  onClick={() => {
                    scrollToSection("home");
                    setIsOpen(false);
                  }}
                >
                  <div className="label-3">მთავარი</div>
                </div>
                <div
                  className="label-wrapper"
                  onClick={() => scrollToSection("services")}
                >
                  <div className="label-3">სერვისები</div>
                </div>
                <div
                  className="div-wrapper"
                  onClick={() => scrollToSection("about")}
                >
                  <div className="label-3">ჩვენ შესახებ</div>
                </div>
                <div className="item-2" onClick={() => scrollToSection("news")}>
                  <div className="label-3">ბლოგი</div>
                </div>
                <div className="item-3">
                  <div className="label-3">კონტაქტი</div>
                  <div className="contact-details">
                    <div className="item-4">
                      <Phoneicon1 className="icon-instance-node" />
                      <p className="p">+995 595 50 80 10</p>
                    </div>
                    {/* <div className="item-4">
                      <Whatsappicon className="icon-instance-node" />
                      <p className="p">+995 595 50 80 10</p>
                    </div> */}
                    <div className="item-4">
                      <Facebookicon1
                        className="icon-instance-node"
                        color="#2D84FF"
                      />
                      <div className="text-wrapper-2">
                        facebook.com/izoma.ge
                      </div>
                    </div>
                    <div className="item-4">
                      <Envelopeicon3 className="icon-instance-node" />
                      <div className="text-wrapper-2">izoma.info@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
