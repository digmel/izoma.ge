import React from "react";
import { Arrow } from "../../icons/Arrow";
import { Envelope } from "../Envelope";
import { Facebook } from "../Facebook";
import { PhoneWrapper } from "../PhoneWrapper";
import "./style.css";

// TODO: fix subscribe input field and make it responsive

export const Footer = () => {
  return (
    <div className="footer">
      <div className="copyrights">
        <img
          className="logo-2"
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/logo-1@2x.png"
        />
        <img
          className="divider"
          alt="Divider"
          src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/divider-1.svg"
        />
        <p className="p">
          2023 ყველა უფლება დაცულია&nbsp;&nbsp;მთიელი წიგნების მიერ.
        </p>
      </div>
      <div className="contact">
        <div className="title-5">კონტაქტი</div>
        <div className="div-9">
          <div className="container">
            <PhoneWrapper className="phone-instance" />
            <div className="text-wrapper-3">+(995) 599 999 999</div>
          </div>
          <div className="container">
            <Facebook className="facebook-instance" />
            <a
              className="text-wrapper-3"
              href={""}
              rel="noopener noreferrer"
              target="_blank"
            >
              facebook.com/mtieli.tsignebi
            </a>
          </div>
          <div className="container">
            <Envelope className="envelope-instance" />
            <div className="text-wrapper-3">mtielitsignebi@ge</div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="title-5">გამოიწერე სიახლეები</div>
        <div className="div-9">
          <p className="description-4">
            დაგეგმილი და შესრულებული მოგზაურობების შესახებ
          </p>
          <div className="input">
            <div className="overlap-group-2">
              <div className="arrow-wrapper">
                <Arrow className="arrow-instance" />
              </div>
              <div className="element-7">შენი ელ-ფოსტა</div>
              <div className="input-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
