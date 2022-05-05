import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };
  const logo = ["AsqarDev"];
  return (
    <div className="header px-3">
      <div className="menu-icon">
        <div className="logo">
          <h2 className="">Logo</h2>
        </div>
        <FaBars className="menu" onClick={showModal} />
      </div>
      <nav className={modal ? "slider active" : "slider"}>
        <div className="medialogo">
          <h4 className="">
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
            <a className="aa" href="#2">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
