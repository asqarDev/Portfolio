import React from "react";
import imgMan from "./../../img/man.jpg";
import imgCardFooter from "./../../img/busimg.jpg";
import { BiTimeFive } from "react-icons/bi";
import scratch from "./../../img/scratch.png";
import frontend from "./../../img/frontend.jpg";
import backend from "./../../img/backend.jpg";
import { Link } from "react-router-dom";
export default function Blog({ name, toastClick, toastClick1, toastClick2 }) {
  return (
    <div className="blog my-5" id="blog">
      <div className="container my-5">
        <div className="text-center">
          <h1>BLOG</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="d-flex justify-content-center mb-3">
            <div
              className="text-center"
              style={{ width: "60px", height: "4px", background: "#0078ff" }}
            ></div>
          </div>
        </div>
        <div className="row my-5 justify-content-center">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <div class="card">
              <div style={{ overflow: "hidden" }}>
                <img
                  src={frontend}
                  width="100%"
                  height="300px"
                  class="card-img-top"
                  alt="me"
                />
              </div>
              <p className="text-center badges mb-0">
                <span class="badge bg-primary ">Frontend</span>
              </p>
              <div class="card-body py-0 ">
                <h4 class="card-title text-center">Frontend projects</h4>
                <p class="card-text">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
                <p className="text-center">
                  <button className="btn btn-primary " onClick={toastClick}>
                    Frontend start
                  </button>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="imgCardFooter ">
                  <img className="" src={imgCardFooter} />
                </div>
                <h6 className="mb-0">{name}</h6>
                <p className="mb-0 d-flex justify content-berween align-items-center">
                  {" "}
                  <BiTimeFive /> 10 min
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div class="card">
              <div style={{ overflow: "hidden" }}>
                <img
                  src={backend}
                  width="100%"
                  height="300px"
                  class="card-img-top"
                  alt="me"
                />
              </div>
              <p className="text-center badges mb-0">
                <span class="badge bg-primary ">Backend</span>
              </p>
              <div class="card-body py-0 ">
                <h4 class="card-title text-center">Backend projects</h4>
                <p class="card-text">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
                <p className="text-center">
                  <button onClick={toastClick1} className="btn btn-primary ">
                    Backend start
                  </button>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="imgCardFooter ">
                  <img className="" src={imgCardFooter} />
                </div>
                <h6 className="mb-0">{name}</h6>
                <p className="mb-0 d-flex justify content-berween align-items-center">
                  {" "}
                  <BiTimeFive /> 10 min
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div class="card">
              <div style={{ overflow: "hidden" }}>
                <img
                  src={scratch}
                  width="100%"
                  height="300px"
                  class="card-img-top"
                  alt="me"
                />
              </div>
              <p className="text-center badges mb-0">
                <span class="badge bg-primary ">Scratch</span>
              </p>
              <div class="card-body py-0 ">
                <h4 class="card-title text-center">Scratch projects</h4>
                <p class="card-text">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
                <p className="text-center">
                  <Link
                    to="/scratch"
                    onClick={toastClick2}
                    className="btn btn-primary "
                  >
                    Scratch games start
                  </Link>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="imgCardFooter ">
                  <img className="" src={imgCardFooter} alt="images" />
                </div>
                <h6 className="mb-0">{name}</h6>
                <p className="mb-0 d-flex justify content-berween align-items-center">
                  {" "}
                  <BiTimeFive /> 10 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <Link className="btn btn-primary py-3 px-5" to="/pagination">
              New Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
