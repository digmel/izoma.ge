import React from "react";
import { Button } from "../Button";
import { Clockicon2 } from "../../icons/Clockicon2";
import "./style.css";

export const About = ({ isMob }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="about">
      {!isMob && (
        <div className="about">
          <div className="description-5">
            <div className="text-wrapper-5">ჩვენ შესახებ</div>
            <div className="flex-container">
              <div className="text">
                <span className="span">
                  &#34;აიზომა&#34; დაკომპლექტებულია მაღალი პასუხისმგებლობის და
                  საქმეზე ორიენტირებული გეოდეზისტების ჯგუფით. <br />
                </span>
              </div>
              <div className="text">
                <span className="span">
                  ჩვენი გუნდი გაგიწევთ უფასო კონსულტაციას როგორც ტექნიკური ასევე
                  სამართლებლივი კუთხით. &#34;აიზომა&#34; საჯარო რეესტრის
                  ავტორიზებული მომხმარებელია, რაც იმას ნიშნავს რომ ჩვენი
                  ოფისიდანვე მოხდება საჯარო რეესტრში განაცხადის შეტანა
                  სარეგისტრაციოდ, რაც თავიდან აგაცილებთ იუსტიციის სახლში რიგში
                  დგომას.
                </span>
              </div>
            </div>
            <div className="work-hours">
              <Clockicon2 className="clock-icon" color="#6B7280" />
              <p className="text-wrapper-6">
                ვმუშაობთ ყოველ დღე 10:00-დან 18:00-მდე
              </p>
            </div>
            <Button onClick={() => scrollToSection("contact")} />
          </div>
          <div className="group">
            <div className="rectangle-wrapper">
              <img
                className="rectangle-50"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/rectangle-5192-2@2x.png"
              />
            </div>
            <img
              className="rectangle-51"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/rectangle-5191-2@2x.png"
            />
            <img
              className="rectangle-52"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/rectangle-5197-2@2x.png"
            />
            <img
              className="rectangle-53"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/rectangle-5196-2@2x.png"
            />
          </div>
        </div>
      )}

      {isMob && (
        <div className="about-section-wrapper">
          <div className="about-section">
            <div className="group">
              <div className="overlap-group">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/fb4df792853a0609f29c896511e51542/img/rectangle-5192-1@2x.png"
                />
              </div>
              <img
                className="img"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/fb4df792853a0609f29c896511e51542/img/rectangle-5191@2x.png"
              />
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/fb4df792853a0609f29c896511e51542/img/rectangle-5195-1@2x.png"
              />
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/fb4df792853a0609f29c896511e51542/img/rectangle-5196-1@2x.png"
              />
            </div>
            <div className="description">
              <h1 className="text-wrapper">ჩვენ შესახებ</h1>
              <div className="flex-container">
                <div className="text">
                  <span className="span">
                    &#34;აიზომა&#34; დაკომპლექტებულია მაღალი პასუხისმგებლობის და
                    საქმეზე ორიენტირებული გეოდეზისტების ჯგუფით. <br />
                  </span>
                </div>
                <div className="text">
                  <span className="span">
                    ჩვენი გუნდი გაგიწევთ უფასო კონსულტაციას როგორც ტექნიკური
                    ასევე სამართლებლივი კუთხით. &#34;აიზომა&#34; საჯარო რეესტრის
                    ავტორიზებული მომხმარებელია, რაც იმას ნიშნავს რომ ჩვენი
                    ოფისიდანვე მოხდება საჯარო რეესტრში განაცხადის შეტანა
                    სარეგისტრაციოდ, რაც თავიდან აგაცილებთ იუსტიციის სახლში რიგში
                    დგომას.
                  </span>
                </div>
              </div>
              <div className="work-hours">
                <Clockicon2 className="clock-icon" color="#6B7280" />
                <p className="p">ვმუშაობთ ყოველ დღე 10:00-დან 18:00-მდე</p>
              </div>
              <Button onClick={() => scrollToSection("contact")} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
