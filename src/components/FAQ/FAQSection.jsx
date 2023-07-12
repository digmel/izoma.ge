import React from "react";
import { Button } from "../Button";
import { Chevronicon3 } from "../../icons/Chevronicon3";
import { ChevronIconBg } from "../../components/ChevronIconBg";
import "./style.css";

export const FAQSection = ({ isMob }) => {
  return (
    <>
      {!isMob && (
        <div className="wrapper">
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
          <div className="button-wrapper">
            <Button text="იხილე მეტი" />
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
              <div className="question">
                <div className="number">01</div>
                <div className="content">
                  <div className="header">
                    <p className="p">
                      რა არის შიდა აზომვითი ნახაზი და რა შემთხვევებში არის
                      აუცილებელი მისი მომზადება?
                    </p>
                    <ChevronIconBg />
                  </div>
                  <div className="flex-container">
                    <div className="text">
                      <span className="span">
                        შიდა აზომვითი ნახაზი წარმოადგენს ნებისმიერი ტიპის
                        შენობა-ნაგებობის შიდა ფართის გეგმას. ნახაზი გამოიყენება
                        საჯარო რეესტრში ბინის, სხვენის, სარდაფის, ავტოფარეხის და
                        ა.შ. სარეგისტრაციოთ, ასევე ბანკში ან სხვა ნებისმიერ
                        ორგანოში წარსადგენად. შიდა ნახაზი ასახავს ოთახების და
                        ტიხრების ზუსტ განლაგებას, კარ-ფანჯრის ადგილმდებარეობას
                        მასზედ დატანილი ზომებით (როგორც ფართობი, ასევე
                        სიგრძე-სიგანე). მისი მომზადება სავალდებულოა როდესაც:{" "}
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        არასდროს არ ჩატარებულა აზომვითი სამუშაოები და შენობა არ
                        არის დარეგისტრირებული - პირველადი რეგისტრაცია; <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        უძრავი ქონების მფლობელს სურს იპოთეკური სესხის აღება და
                        შენობის ფართობი არ არის ასახული ამონაწერში;
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        შენობა აზომილია ადრეულ წლებში და არ შეესაბამება
                        დღეისათვის არსებულ სტანდარტს. (მაგ: ძველი წესით სველი
                        წერტილების და აივნის ფართობი არ შედიოდა შენობის შიდა
                        ფართში);
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        ხდება შენობის ორ ან მეტ ნაწილად დაყოფა - გამიჯვნა, ან
                        პირიქით - გაერთიანება;
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        შენობას გააჩნია მიშენება და მფლობელს სურს, რომ ახალი
                        დადგენილების თანახმად დაირეგისტრიროს მიშენებული ფართი;
                        <br />
                      </span>
                    </div>
                    <div className="span-wrapper">
                      <span className="span">
                        კომუნიკაციებია შესაყვანი შენობაში;
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="span">
                        იგეგმება ინტერიერის რეაბილიტაცია, გადაკეთება ან/და
                        მოწყობა. არქიტექტორს, ხელოსანს, დიზაინერს ესაჭიროება
                        არსებულის ზუსტი ზომები რათა წინასწარ შეძლონ მასალის,
                        ავეჯის და შესაბამისად ხარჯების კალკულაცია.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="question">
                <div className="number">02</div>
                <div className="content">
                  <div className="header">
                    <p className="p">
                      რა არის მიწის ნაკვეთის საკადასტრო აგეგმვითი/აზომვითი
                      ნახაზი და რა შემთხვევებში არის აუცილებელი მისი მომზადება?
                    </p>
                    <ChevronIconBg
                      className="chevron-icon-bg-instance"
                      icon={<Chevronicon3 className="chevronicon-3" />}
                    />
                  </div>
                </div>
              </div>
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
