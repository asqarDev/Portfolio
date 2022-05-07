import React from "react";
import "./Global.css";
import meImg from "./../../img/img.jpg";
import Slider from "react-slick";
import { FiYoutube } from "react-icons/fi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import dateFormat, { masks } from "dateformat";
import Youtube from "./Youtube";
const now = new Date();
export default function About({ name, profile, email, phone, data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="about pb-5 my-5" id="about">
      <div className="about_top"></div>
      <h1 className="text-center mt-5">About Me</h1>
      <div
        className="container my-5 mycontainer"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="row p-3">
          <div className="col-lg-6 col-md-6 my-2 aboutImg">
            <div class=" mb-3" style={{ border: "none" }}>
              <div class="row g-0 justify-content-center align-items-center">
                <div class="col-md-4 col-lg-4">
                  <img
                    src={meImg}
                    class="img-fluid rounded-start"
                    alt="rasim yo'q hozircha "
                  />
                </div>
                <div class="col-lg-8 col-md-8">
                  <div class="card-body aboutProfile">
                    <p>
                      <b>Name: </b> {name}
                    </p>
                    <p>
                      <b>Profile: </b> {profile}
                    </p>
                    <p>
                      <b>Email: </b> {email}
                    </p>
                    <p>
                      <b>Phone: </b> {phone}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-center"> {dateFormat(now)}</h5>
              {/*  Sat Jun 09 2007 17:46:21 */}
            </div>
            <div className="" style={{ border: "none" }}>
              <h6>Skill</h6>
              <p className="mb-0 mt-3">HTML 90%</p>
              <div className="progress">
                <div
                  style={{ width: "90%" }}
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="mb-0 mt-3">CSS3 85%</p>
              <div className="progress">
                <div
                  style={{ width: "85%" }}
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="mb-0 mt-3">JAVASCRIPT 75%</p>
              <div className="progress">
                <div
                  style={{ width: "75%" }}
                  className="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="mb-0 mt-3">JQUERY 70%</p>
              <div className="progress">
                <div
                  style={{ width: "70%" }}
                  className="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="mb-0 mt-3">JAVASCRIPT FREMWOR REACT 80%</p>
              <div className="progress">
                <div
                  style={{ width: "80%" }}
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 my-5">
            <div className=" aboutme" style={{ border: "none" }}>
              <h1>About me</h1>
              <div className="linechiziq"></div>
              <div className="mt-4">
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                  tincidunt.
                </p>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vivamus suscipit tortor eget felis porttitor volutpat.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. porttitor at sem.
                </p>
                <p>
                  Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                  pretium ut lacinia in, elementum id enim. Nulla porttitor
                  accumsan tincidunt. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ background: "transparent" }}>
        <div className="">
          <h2 className="text-center py-4">Our Team</h2>
        </div>

        <Slider {...settings}>
          {data.map((item) => (
            <div>
              <div className=" p-2 mx-1 sliderlar">
                <div className="card-header p-0">
                  <img
                    width="100%"
                    height="300px"
                    src={item.imgUrl}
                    class="card-img-top"
                    alt="developer image"
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-text mb-0">Yo'nalish: {item.yonalishi}</p>
                  <p className="card-text mb-0"> Yosh: {item.age}</p>
                  <p className="card-text mb-0">Kasbi: {item.kasbi}</p>
                </div>
                <div className="card-footer">
                  <div className="boglanish ">
                    <div className="tarmoqlar">
                      <a className="" href={`https://t.me/${item.telegram}`}>
                        <h2>
                          <FaTelegram className="fatarmoq" />
                        </h2>
                      </a>
                    </div>
                    <div className="tarmoqlar">
                      <a className="" href={`https://t.me/${item.instagram}`}>
                        <h2>
                          <FaInstagram className="fatarmoq" />
                        </h2>
                      </a>
                    </div>
                    <div className="tarmoqlar">
                      <a className="" href="https://facebook.com/asqar.mirzaye">
                        <h2>
                          <FaFacebook className="fatarmoq" />
                        </h2>
                      </a>
                    </div>
                    <div className="tarmoqlar">
                      <a
                        className=""
                        href="https://www.youtube.com/watch?v=dPLleyn5kE4&list=PL-mivq7XpsPauPDFeznwdYpsGIIxJ5_6o"
                      >
                        <h2>
                          <FiYoutube className="fatarmoq" />
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Youtube />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        boxShadow: "0px 0px 7px rgba(0,0,0,0.5)",
        color: "white",
        position: "absolute",
        zIndex: "1",
        right: "-12px",
        bottom: "calc(50% - 12px)",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <GrNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        boxShadow: "0px 0px 7px rgba(0,0,0,0.5)",
        color: "white",
        position: "absolute",
        zIndex: "1",
        top: "calc(50% - 22px)",
        left: "-12px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <GrPrevious />
    </div>
  );
}
