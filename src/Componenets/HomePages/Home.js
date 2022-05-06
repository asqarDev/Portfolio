import React from "react";
// import Typed from "typed.js";
import "./Global.css";

import Typed from "react-typed";
export default function Home({name}) {
  
  return (
    <div className="home" id="home">
      <div className="bg_home">
        <div>
          <h1>{name}</h1>

          {/* <h3 className='text-center'>
                        <Typical
                            loop={Infinity}
                            wrapper='a'
                            steps={[
                                "Developer", 1200,
                                "YouTuber", 1200,
                                "Freelancer", 1200,
                                "Photographer", 1300
                            ]}
                        /></h3> */}
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
    </div>
  );
}
