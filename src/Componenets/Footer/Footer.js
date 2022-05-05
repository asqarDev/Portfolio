import React from "react";
import "./Footer.css";
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
export default function Footer({ name }) {
  return (
    <div className="footer">
      <div className="bg_footer">
        <div className="container">
          <div className="row py-5 justify-content-center text-center">
            <div className="col-lg-4 my-5  col-md-6">
              <h3 className="mb-3">About the system</h3>
              <div className="text-center mt-4">
                <RiReactjsLine className="react" />
              </div>
              <p className="">Website React is based on js</p>
            </div>
            <div className="col-lg-4 my-5 col-md-6 ">
              <h3>Projects</h3>

              <ul className="ul">
                <li className="li">
                  <a className="" href="https://mustafoali.credence.uz/">
                    Credence uz <AiOutlineRight />
                  </a>
                </li>
                <li className="li">
                  <a className="" href="https://evroprintuz.netlify.app">
                    Evroprint <AiOutlineRight />
                  </a>
                </li>
                <li className="li">
                  <a className="" href="https://lagistikauz.netlify.app">
                    Lagistika <AiOutlineRight />
                  </a>
                </li>
                <li className="li">
                  <a className="" href="https://unbounce.netlify.app">
                    Unbounce <AiOutlineRight />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 my-5 col-md-6">
              <h3 className="">Link to Github</h3>
              <div className="text-center my-4">
                <p className="github">
                  AsqarDev <i> </i>{" "}
                  <a
                    target="_blanck"
                    href="https://github.com/asqarDev/portfolio"
                  >
                    portfolio
                  </a>
                </p>
                <p className="github">
                  Github <i> </i>{" "}
                  <a target="_blanck" href="https://github.com/asqarDev/">
                    Github account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_fon py-2">
        <p className="mb-0">@2022 Copyright {name}. All Rights Reserved </p>
      </div>
    </div>
  );
}
