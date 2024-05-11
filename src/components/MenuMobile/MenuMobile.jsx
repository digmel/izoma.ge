import React from "react";
import styled from "styled-components";
import { Phoneicon1 } from "../../icons/Phoneicon1";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Envelopeicon3 } from "../../icons/Envelopeicon3";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-top: 16px;

  margin-left: 12px;

  & .overlap-group {
    height: 480px;
    position: relative;
    width: 350px;
    margin-right: 12px;
  }

  & .item {
    align-items: center;
    background-color: var(--gray-50);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--gray-200);
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    left: 0;
    padding: 20px 64px;
    position: absolute;
    top: 0;
    width: 350px;

    transition: transform 0.3s ease;

    &:active {
      transform: scale(0.95);
    }
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  & .label {
    color: var(--gray-800);
    font-family: "Noto Sans Georgian", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 22.4px;
    margin-top: -0.5px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .label-wrapper {
    align-items: center;
    background-color: var(--gray-50);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--gray-200);
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    left: 0;
    padding: 20px 64px;
    position: absolute;
    top: 62px;
    width: 350px;
  }

  & .text-wrapper {
    color: var(--gray-800);
    font-family: var(--body-l-regular-font-family);
    font-size: var(--body-l-regular-font-size);
    font-style: var(--body-l-regular-font-style);
    font-weight: var(--body-l-regular-font-weight);
    letter-spacing: var(--body-l-regular-letter-spacing);
    line-height: var(--body-l-regular-line-height);
    margin-top: -0.5px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
    margin-bottom: 16px;
  }

  & .div-wrapper {
    align-items: center;
    background-color: var(--gray-50);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--gray-200);
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    left: 0;
    padding: 20px 64px;
    position: absolute;
    top: 124px;
    width: 350px;
  }

  & .div {
    align-items: center;
    background-color: var(--gray-50);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--gray-200);
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    left: 0;
    padding: 20px 64px;
    position: absolute;
    top: 186px;
    width: 350px;
  }

  & .item-2 {
    align-items: flex-start;
    background-color: var(--gray-50);
    border-color: var(--gray-200);
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    left: 0;
    padding: 32px 64px;
    position: absolute;
    top: 248px;
    width: 100%;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
  }

  & .contact-details {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    padding: 0px 0px 0px 8px;
    position: relative;
  }

  & .item-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .icon-instance-node {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .p {
    color: var(--gray-800);
    font-family: var(--body-s-regular-font-family);
    font-size: var(--body-s-regular-font-size);
    font-style: var(--body-s-regular-font-style);
    font-weight: var(--body-s-regular-font-weight);
    letter-spacing: var(--body-s-regular-letter-spacing);
    line-height: var(--body-s-regular-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-2 {
    color: #002251;
    font-family: var(--body-s-regular-font-family);
    font-size: var(--body-s-regular-font-size);
    font-style: var(--body-s-regular-font-style);
    font-weight: var(--body-s-regular-font-weight);
    letter-spacing: var(--body-s-regular-letter-spacing);
    line-height: var(--body-s-regular-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const MenuMobile = ({ scrollToSection }) => {
  const handleMenuClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    scrollToSection(sectionId);
  };

  return (
    <StyledBox>
      <div className="overlap-group">
        <div
          className="item"
          href="#home"
          onClick={(e) => handleMenuClick(e, "home")}
        >
          <span className="label">მთავარი</span>
        </div>
        <div
          className="label-wrapper"
          href="#services"
          onClick={(e) => handleMenuClick(e, "services")}
        >
          <span className="text-wrapper">სერვისები</span>
        </div>
        <div
          className="div-wrapper"
          href="#about"
          onClick={(e) => handleMenuClick(e, "about")}
        >
          <span className="text-wrapper">ჩვენ შესახებ</span>
        </div>
        <div
          className="div-wrapper"
          href="#map-section"
          onClick={(e) => handleMenuClick(e, "map-section")}
        >
          <span className="text-wrapper">საკადასტრო რუკა</span>
        </div>
        <div
          className="div"
          href="#news"
          onClick={(e) => handleMenuClick(e, "news")}
        >
          <div className="text-wrapper">ბლოგი</div>
        </div>
        <div className="item-2">
          <div className="text-wrapper">კონტაქტი</div>
          <div className="contact-details">
            <div className="item-3">
              <Phoneicon1 className="icon-instance-node" />
              <p className="p">+995 595 50 80 10</p>
            </div>
            <div className="item-3">
              <Facebookicon1 className="icon-instance-node" color="#2D84FF" />
              <a
                className="text-wrapper-2"
                href="https://www.facebook.com/iZoma.Ge/"
              >
                facebook.com/iZoma.Ge
              </a>
            </div>
            <div className="item-3">
              <Envelopeicon3 className="icon-instance-node" />
              <div className="text-wrapper-2">izoma.info@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};
