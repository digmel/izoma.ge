import React, { useState } from "react";
import { Button } from "../Button";
import { Chevronicon3 } from "../../icons/Chevronicon3";
import { ChevronIconBg } from "../../components/ChevronIconBg";
import "./style.css";
import { questions } from "./FAQContent";

export const FAQSection = ({ isMob }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <>
    {!isMob && (
      <div className="wrapper">
          <div className="text-wrapper-7">ხშირად დასმული კითხვები</div>
          <div className="faq">
            <div className="overlap-group-3">
              {questions.map((question, index) => (
                <div className="question" key={index}>
                  <div className="number">{question.number}</div>
                  <div className="content-2">
                    <div
                      className="header-2"
                      onClick={() => handleQuestionClick(index)}
                    >
                      <div className="block-title-wrapper">
                        <p className="block-title">{question.title}</p>
                        <ChevronIconBg
                          className="chevron-icon-bg-instance"
                          icon={<Chevronicon3 className="chevronicon-3" />}
                        />
                      </div>
                    </div>
                    <div className="flex-container-wrapper">
                      {expandedQuestion === index && (
                        <div className="flex-container-2">
                          <div className="span-wrapper">
                            <span className="text-wrapper-8">
                              {question.answer}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
     
      )}

      {isMob && (
        <div className="FAQ-wrapper">
          <div className="FAQ">
            <div className="title">
              <h1 className="text-wrapper">
                ხშირად დასმული <br />
                კითხვები
              </h1>
            </div>
            <div className="div">
              {questions.map((question, index) => (
                <div className="question" key={index}>
                  <div className="number">{question.number}</div>
                  <div className="content">
                    <div
                      className="header"
                      onClick={() => handleQuestionClick(index)}
                    >
                      <p className="p">{question.title}</p>
                      <ChevronIconBg
                        className="chevron-icon-bg-instance"
                        icon={<Chevronicon3 className="chevronicon-3" />}
                      />
                    </div>
                    <div className="flex-container">
                      {expandedQuestion === index && (
                        <div className="text">
                          <span className="span">{question.answer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="button-wrapper">
            <Button className="button-instance" text="იხილე მეტი" />
          </div>
        </div>
      )}
   
  </>
  );
};
