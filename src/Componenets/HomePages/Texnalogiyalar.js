import React from "react";
import texnalogiya from "./../Css/Texnalogiya.module.css";
import html from "./../../img/html5.png";
import css from "./../../img/css.png";
import js from "./../../img/js1.jpg";
import react from "./../../img/react1.png";
import sass from "./../../img/sass.png";
export default function Texnalogiyalar() {
  return (
    <div className={texnalogiya.texnologiya}>
      <div className="container pb-5">
        <h2 className="text-center my-2">Texnalogiyalar</h2>
        <div className="row my-3 justify-content-center">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div class="card py-3">
              <img
                width="100%"
                height="150px"
                src={html}
                class="card-img-top border-0"
                alt="html img"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div class="card p-3">
              <img
                height="150px"
                src={css}
                class="card-img-top"
                alt="html img"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div class="card p-3">
              <img
                height="150px"
                src={sass}
                class="card-img-top"
                alt="html img"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div class="card p-3">
              <img
                height="150px"
                src={js}
                class="card-img-top"
                alt="html img"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div class="card p-3">
              <img
                height="150px"
                src={react}
                class="card-img-top"
                alt="html img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
