import React from "react";
// import Typed from "typed.js";
import "./Global.css";
import profile from "./../../img/profileImg.png";
import Typed from "react-typed";
import Texnalogiyalar from "./Texnalogiyalar";
export default function Home({ name }) {
  return (
    <div className="home" id="home">
      <div className="bg_home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h1 className="text-center">{name}</h1>
                <h3 className="text-center">
                  <Typed
                    className="typed-text"
                    strings={[
                      "I am <i>Developer 🧔🏻</i>",
                      "I am <strong>YouTuber</strong>",
                      "I am Freelancer",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    smartBackspace={true} // this is a default
                    loop={true}
                  />
                </h3>
                <h6 className="text-center mt-3">
                  <button className="box mt-4">Button</button>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Texnalogiyalar />
    </div>
  );
}
