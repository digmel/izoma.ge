import React, { useState } from "react";
import { Menuicon } from "../../icons/Menuicon";
import { Logo } from "../../icons/Logo";
import { Menu } from "../Menu";
import "./style.css";
import { Button } from "../Button";
import { MenuMobile } from "../MenuMobile";
import { useNavigate } from "react-router";

export const Header = ({ isMob, className }) => {
  const navigate = useNavigate();
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
        top: section.offsetTop - 85,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={`header is-mob-${isMob}`}>
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
              text="კონტაქტი"
              onClick={() => scrollToSection("contact")}
            />
          </>
        )}

        {isMob && (
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              height: "64px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
              }}
            >
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
            </div>
            {isOpen && <MenuMobile scrollToSection={scrollToSection} />}
          </div>
        )}
      </div>
    </>
  );
};
