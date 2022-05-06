import React from "react";
// import Typed from "typed.js";
import "./Global.css";
import profile from "./../../img/profileImg.png";
import Typed from "react-typed";
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
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div>
                <div className="">
                  <img
                    width="100%"
                    height="100%"
                    src={profile}
                    className="card-img-top"
                    alt="Profile img"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
