import React from "react";
import { GoLocation } from "react-icons/go";
import { FiSmartphone, FiYoutube } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Maps } from "./Maps";
export default function Contact({
  phone,
  email,
  toastClick,
  toastClick2,
  maps,
}) {
  const getForPost = () => {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;
    if (
      name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      message.length > 0
    ) {
      toastClick();
      console.log(name);
    } else {
      toastClick2();
    }
  };

  return (
    <div className="contact pt-5" id="contact">
      <div className="bg_contact">
        <div className="opasiti">
          <div className="">
            <h1 className="text-center pt-5">Contact</h1>
          </div>
          <div className="container my-5 mycontainer">
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
                          id="name"
                          placeholder="name@example.com"
                        />
                        <label for="name">Your Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label for="email">Your Email</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="name@example.com"
                        />
                        <label for="subject">Subject</label>
                      </div>
                      <div class="form-floating">
                        <textarea
                          rows={10}
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="message"
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-primary mt-3"
                          type="reset"
                          onClick={getForPost}
                        >
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
                  <div className="manzillar">
                    <p className="">
                      {" "}
                      <a href={maps} className="" target="_blanck">
                        <GoLocation className="geoLocation" /> Tashkent shahar
                        Chilonzor Tumani C kvartl 12-dom 77 uy
                      </a>
                    </p>
                    <p className="">
                      {" "}
                      <a href={"tel:" + { phone }}>
                        <FiSmartphone className="geoLocation" /> {phone}
                      </a>
                    </p>
                    <p className="">
                      {" "}
                      <a href={"mailto:" + { email }}>
                        <AiOutlineMail className="geoLocation" /> {email}
                      </a>
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
