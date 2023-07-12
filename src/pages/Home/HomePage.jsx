import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Button } from "../../components/Button";
import { ChevronIconBg } from "../../components/ChevronIconBg";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { IsmobFalseWrapper } from "../../components/IsmobFalseWrapper";
import { ServicesSection } from "../../components/ServicesSection";
import { Chevronicon3 } from "../../icons/Chevronicon3";
import { Clockicon2 } from "../../icons/Clockicon2";

export const HomePage = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMob(true);
    }
  }, []);

  return (
    <div className="home">
      <div className="div-5">
        <div className="overlap-2">
          <HeroSection
            className="design-component-instance-node-2"
            isMob={isMob}
            statisticsImg="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-03@2x.png"
            statisticsLogo="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/logo-04.svg"
          />
          <Header
            className="design-component-instance-node-2"
            isMob={isMob}
            logoDefaultKey="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key.svg"
            logoDefaultName="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/name.svg"
            logoDefaultRing="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-1.svg"
          />
        </div>
        <ServicesSection className="services-section" isMob={isMob} />
        <div className="about-section">
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
        <div className="FAQ">
          <div className="text-wrapper-7">ხშირად დასმული კითხვები</div>
          <div className="faq">
            <div className="overlap-group-3">
              <div className="question">
                <div className="number">01</div>
                <div className="content-2">
                  <div className="header-2">
                    <div className="block-title-wrapper">
                      <p className="block-title">
                        რა არის შიდა აზომვითი ნახაზი და რა შემთხვევებში არის
                        აუცილებელი მისი მომზადება?
                      </p>
                    </div>
                    <ChevronIconBg />
                  </div>
                  <div className="flex-container-wrapper">
                    <div className="flex-container-2">
                      <div className="span-wrapper">
                        <span className="text-wrapper-8">
                          შიდა აზომვითი ნახაზი წარმოადგენს ნებისმიერი ტიპის
                          შენობა-ნაგებობის შიდა ფართის გეგმას. ნახაზი
                          გამოიყენება საჯარო რეესტრში ბინის, სხვენის, სარდაფის,
                          ავტოფარეხის და ა.შ. სარეგისტრაციოთ, ასევე ბანკში ან
                          სხვა ნებისმიერ ორგანოში წარსადგენად. შიდა ნახაზი
                          ასახავს ოთახების და ტიხრების ზუსტ განლაგებას,
                          კარ-ფანჯრის ადგილმდებარეობას მასზედ დატანილი ზომებით
                          (როგორც ფართობი, ასევე სიგრძე-სიგანე). მისი მომზადება
                          სავალდებულოა როდესაც: <br />
                        </span>
                      </div>
                      <div className="text-2">
                        <span className="text-wrapper-8">
                          არასდროს არ ჩატარებულა აზომვითი სამუშაოები და შენობა
                          არ არის დარეგისტრირებული - პირველადი რეგისტრაცია;{" "}
                          <br />
                        </span>
                      </div>
                      <div className="text-2">
                        <span className="text-wrapper-8">
                          უძრავი ქონების მფლობელს სურს იპოთეკური სესხის აღება და
                          შენობის ფართობი არ არის ასახული ამონაწერში;
                          <br />
                        </span>
                      </div>
                      <div className="span-wrapper">
                        <span className="text-wrapper-8">
                          შენობა აზომილია ადრეულ წლებში და არ შეესაბამება
                          დღეისათვის არსებულ სტანდარტს. (მაგ: ძველი წესით სველი
                          წერტილების და აივნის ფართობი არ შედიოდა შენობის შიდა
                          ფართში);
                          <br />
                        </span>
                      </div>
                      <div className="text-2">
                        <span className="text-wrapper-8">
                          ხდება შენობის ორ ან მეტ ნაწილად დაყოფა - გამიჯვნა, ან
                          პირიქით - გაერთიანება;
                          <br />
                        </span>
                      </div>
                      <div className="span-wrapper">
                        <span className="text-wrapper-8">
                          შენობას გააჩნია მიშენება და მფლობელს სურს, რომ ახალი
                          დადგენილების თანახმად დაირეგისტრიროს მიშენებული ფართი;
                          <br />
                        </span>
                      </div>
                      <div className="text-2">
                        <span className="text-wrapper-8">
                          კომუნიკაციებია შესაყვანი შენობაში;
                          <br />
                        </span>
                      </div>
                      <div className="span-wrapper">
                        <span className="text-wrapper-8">
                          იგეგმება ინტერიერის რეაბილიტაცია, გადაკეთება ან/და
                          მოწყობა. არქიტექტორს, ხელოსანს, დიზაინერს ესაჭიროება
                          არსებულის ზუსტი ზომები რათა წინასწარ შეძლონ მასალის,
                          ავეჯის და შესაბამისად ხარჯების კალკულაცია.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="question-2">
                <div className="number">02</div>
                <div className="header-3">
                  <div className="block-title-wrapper">
                    <p className="block-title-2">
                      რა არის მიწის ნაკვეთის საკადასტრო აგეგმვითი/აზომვითი
                      ნახაზი და რა შემთხვევებში არის აუცილებელი მისი მომზადება?
                    </p>
                  </div>
                  <ChevronIconBg
                    className="chevron-icon-bg-instance"
                    icon={<Chevronicon3 className="chevronicon-3" />}
                  />
                </div>
              </div>
              <div className="question-3">
                <div className="number">03</div>
                <div className="header-4">
                  <div className="block-title-wrapper">
                    <p className="block-title-3">
                      რა არის დაკვალვა (საზღვრების დადგენა?) და რა შემთხვევაში
                      მჭირდება ამ სერვისით სარგებლობა?
                    </p>
                  </div>
                  <ChevronIconBg
                    className="chevron-icon-bg-instance"
                    icon={<Chevronicon3 className="chevronicon-3" />}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button className="button-2" text="იხილე მეტი" />
        </div>
        <IsmobFalseWrapper className="blog-section-instance" isMob={isMob} />
        <ContactSection
          className="contact-section-instance"
          iconBg="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/iconbg.svg"
          isMob={isMob}
        />
        <Footer
          className="footer-instance"
          isMob={isMob}
          logoDefaultKey="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/key-2.svg"
          logoDefaultRing="https://generation-sessions.s3.amazonaws.com/5dfcc5d69cc66bba85ef251c08b40128/img/ring-2.svg"
        />
      </div>
    </div>
  );
};
