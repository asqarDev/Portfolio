import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars, FaCode } from "react-icons/fa";

const Navbar = (getLogin) => {
  const [modal, setModal] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(41, 38, 38, 0.9)")
      : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
  };

  const showModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const logo = ["AsqarDev"];
  return (
    <div
      className="header px-3"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <div className="menu-icon">
        <div className="logo">
          <h4 className="">
            <FaCode className="" /> <b> {logo}</b>
          </h4>
        </div>
        <FaBars className="menu" onClick={showModal} />
      </div>
      <nav className={modal ? "slider active" : "slider"}>
        <div className="medialogo">
          <h4 className="mx-3">
            <FaCode className="coder" /> <b> {logo}</b>
          </h4>
        </div>
        <ul className="py-2">
          <div className="closed">
            <FaTimes className="close" onClick={showModal} />
          </div>

          <li className="" onClick={showModal}>
            <a className="a" href="#home">
              Home
            </a>
          </li>
          <li className="">
            <a className="a" href="#about" onClick={showModal}>
              About
            </a>
          </li>
          <li className="">
            <a className="a" onClick={showModal} href="#service">
              Service
            </a>
          </li>
          <li className="">
            <a className="a" onClick={showModal} href="#blog">
              Blog
            </a>
          </li>
          <li className="">
            <a className="a" onClick={showModal} href="#contact">
              Contact
            </a>
          </li>
          <li className="mygreen" onClick={showModal}>
            {/* <a className="aa" href="#3" onClick={getLogin}>
              Log in
            </a> */}
            <NavLink className="aa" to="/login">
              Log in
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
