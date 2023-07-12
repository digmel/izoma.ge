import React from "react";
import { Button } from "../Button";
import { Clockicon2 } from "../../icons/Clockicon2";
import "./style.css";

export const About = () => {
  return (
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
              ავტორიზებული მომხმარებელია, რაც იმას ნიშნავს რომ ჩვენი ოფისიდანვე
              მოხდება საჯარო რეესტრში განაცხადის შეტანა სარეგისტრაციოდ, რაც
              თავიდან აგაცილებთ იუსტიციის სახლში რიგში დგომას.
            </span>
          </div>
        </div>
        <div className="work-hours">
          <Clockicon2 className="clock-icon" color="#6B7280" />
          <p className="text-wrapper-6">
            ვმუშაობთ ყოველ დღე 10:00-დან 18:00-მდე
          </p>
        </div>
        <Button />
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
  );
};
