import React from "react";
import {
  MainInformationStyle,
  FisrtInformationStyle,
  SecondInformationStyle,
  ThirdInformationStyle,
  PartnersStyle
} from "./Information.styled";

class MainInformation extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <MainInformationStyle>
        <FisrtInformationStyle>
          <div className="cont">
            <div className="UpDawn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </div>

            <div className="MainTextCont">
              <h3>Почему мы</h3>
              <div className="TextCont">
                <p className="num">1</p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="SecondTextCont">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="num">2</p>
              </div>
              <div className="TextCont">
                <p className="num">3</p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="SecondTextCont">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="num">4</p>
              </div>
              <div className="TextCont">
                <p className="num">5</p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </FisrtInformationStyle>

        <SecondInformationStyle>
          <div className="cont">
            <h3>Кратко о наших проектах</h3>
            <div className="grid">
              <div className="SecondInformationCont"></div>
              <div className="SecondInformationCont"></div>
              <div className="SecondInformationCont"></div>
            </div>
          </div>
        </SecondInformationStyle>

        <ThirdInformationStyle>
          <h3>Наш конструктор</h3>
          <div className="grid">
            <div className="ThirdInformationCont"></div>
            <div className="InformationCont">
              <h4>Заголовок</h4>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>

            <div className="InformationCont">
              <h4>Заголовок</h4>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="IformationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="ThirdInformationCont"></div>
            
          </div>
        </ThirdInformationStyle>
        <PartnersStyle>
          <div className="cont">
          <h3>Наши партнеры</h3>
          <div className="PartnersImg">
          
          </div>
          {/* <img className="PartnersImg" src="https://sun9-10.userapi.com/impg/0qbDljgSjd2wb5UKpg3ZXOMJFEqJGTAijj4IMQ/eve9K5gDaeU.jpg?size=1219x128&quality=95&sign=a87b95b86efdab08891583fc44bb09cc&type=album"/> */}
          </div>
          </PartnersStyle>
      </MainInformationStyle>
    );
  }
}
export default MainInformation;

// row up
// <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>
// row dawn
{
  /* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg> */
}
