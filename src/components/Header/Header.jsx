import React, { useState } from "react";
import { Menuicon } from "../../icons/Menuicon";
import { Logo } from "../../icons/Logo";
import { Menu } from "../Menu";
import "./style.css";
import { Phoneicon1 } from "../../icons/Phoneicon1";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Envelopeicon3 } from "../../icons/Envelopeicon3";
import { Button } from "../Button";

export const Header = ({ isMob, className }) => {
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
      <div className={`header is-mob-${isMob} ${className}`}>
        {!isMob && (
          <>
            <div className="logo-default-wrapper" onClick={reloadPage}>
              <Logo />
            </div>
            <Menu
              text="მთავარი"
              text1="სერვისები"
              text2="ჩვენ შესახებ"
              text3="ბლოგი"
              text4="საკადასტრო რუკა"
            />

            <Button
              className="button"
              text="კონტაქტი"
              onClick={() => scrollToSection("contact")}
            />
          </>
        )}

        {isMob && (
          <>
            <div className="logo-wrapper">
              <div
                className="logo-default-instance-wrapper"
                onClick={reloadPage}
              >
                <Logo />
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
          className="menu-12"
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
