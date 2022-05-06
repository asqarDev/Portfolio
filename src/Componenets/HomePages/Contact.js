import React from "react";
import { GoLocation } from "react-icons/go";
import { FiSmartphone, FiYoutube } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Maps } from "./Maps";
export default function Contact({ phone, email }) {
  return (
    <div className="contact" id="contact">
      <div className="bg_contact">
        <div className="opasiti">
          <div className="">
            <h1 className="text-center pt-5">Contact</h1>
          </div>
          <div className="container my-5">
            <div className="row p-4">
              <div
                className="col-lg-6 col-md-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="py-5">
                  <h2>Send Message Us</h2>
                  <div className="linechiziq"></div>
                  <div className="form my-4">
                    <form className="mt-5">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Your Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Your Email</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Subject</label>
                      </div>
                      <div class="form-floating">
                        <textarea
                          rows={10}
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                        ></textarea>
                        <label for="floatingTextarea">Message</label>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-primary mt-3" type="button">
                          Send Message{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 my-5"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="">
                  <h2>Get in Touch</h2>
                  <div className="linechiziq"></div>
                  <div className="my-5">
                    <p className="d-flex align-items-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolorum dolorem soluta quidem expedita aperiam
                      aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                      esse laboriosam ratione nobis mollitia inventore?
                    </p>
                  </div>
                  <div>
                    <p className="">
                      {" "}
                      <GoLocation className="geoLocation" /> Tashkent shahar
                      Chilonzor Tumani C kvartl 12-dom 77 uy
                    </p>
                    <p className="">
                      {" "}
                      <FiSmartphone className="geoLocation" /> {phone}
                    </p>
                    <p className="">
                      {" "}
                      <AiOutlineMail className="geoLocation" /> {email}
                    </p>
                  </div>
                  <div className="boglanish ">
                    <div className="tarmoqlar">
                      <a className="" href="https://t.me/Mirzayev_14">
                        <h2>
                          <FaTelegram className="fatarmoq" />
                        </h2>
                      </a>
                    </div>
                    <div className="tarmoqlar">
                      <a className="" href="https://instagram.com/dasturchi_14">
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
          </div>
          <div className="" style={{ width: "100%", height: "50px" }}></div>
        </div>
      </div>
      <div className="xarita container-fluid p-0 m-0">
        <div className="maps" data-aos="zoom-in" data-aos-duration="2000">
          <Maps />
        </div>
      </div>
    </div>
  );
}
