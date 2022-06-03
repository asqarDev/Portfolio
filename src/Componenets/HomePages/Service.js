import React from "react";
import { HiCode } from "react-icons/hi";
import { SiFreelancer, SiScratch, SiAntdesign } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { FaBookReader, FaUsers, FaAward, FaNetworkWired } from "react-icons/fa";
import "./Global.css";
import CountUp from "react-countup";
export default function Service({ profile }) {
  return (
    <div className="services" id="service">
      <div className="container my-5">
        <div className="text-center">
          <h1>SERVICES</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="d-flex justify-content-center mb-3">
            <div
              className="text-center"
              style={{ width: "60px", height: "4px", background: "#0078ff" }}
            ></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <HiCode />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">{profile}</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <SiScratch />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Scratch</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <SiFreelancer />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Freelancer</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in-right">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <SiAntdesign />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Responsive Design</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <SiFreelancer />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Freelancer</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div
              className="card py-4 px-3"
              style={{ border: "none", borderRadius: "18px" }}
            >
              <div className="">
                <div className="box">
                  <div className="code">
                    <h1>
                      {" "}
                      <BiCodeBlock />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Backend developer</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services_bg">
        <div className="opasiti align-items-center d-flex">
          <div className="container ">
            <div className="row my-5">
              <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                <div className=" p-3">
                  <div className="d-flex justify-content-center">
                    <div className="work">
                      <h1>
                        <FaNetworkWired className="workIcon" />
                      </h1>
                    </div>
                  </div>
                  <h2 className="text-center mb-0 mt-2">
                    <CountUp end={200} />+
                  </h2>
                  <h5 className="text-center">Works Complate</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                <div className=" p-3">
                  <div className="d-flex justify-content-center">
                    <div className="work">
                      <h1>
                        <FaBookReader className="workIcon" />
                      </h1>
                    </div>
                  </div>
                  <h2 className="text-center mb-0 mt-2">
                    <CountUp end={20} />+
                  </h2>
                  <h5 className="text-center">Years of Experiance</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                <div className=" p-3">
                  <div className="d-flex justify-content-center">
                    <div className="work">
                      <h1>
                        <FaUsers className="workIcon" />
                      </h1>
                    </div>
                  </div>
                  <h2 className="text-center mb-0 mt-2">
                    <CountUp end={80} />+
                  </h2>
                  <h5 className="text-center">Total Clients</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 " data-aos="zoom-in">
                <div className=" p-3">
                  <div className="d-flex justify-content-center">
                    <div className="work">
                      <h1>
                        <FaAward className="workIcon" />
                      </h1>
                    </div>
                  </div>
                  <h2 className="text-center mb-0 mt-2">
                    <CountUp end={50} />+
                  </h2>
                  <h5 className="text-center">Award Won</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
