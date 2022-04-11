import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
// import './index.css'

import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="main-heading">
            Surge <span className="primary"> Crypto </span>
          </h1>
          <div className="navbar">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <Link to="home" smooth={true} duration={300}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="explore" smooth={true} duration={300}>
                  Explore
                </Link>
              </li>
              <li>
                <Link to="converter" smooth={true} duration={300}>
                  Converter{" "}
                </Link>
              </li>
              <li>
                <Link to="news" smooth={true} duration={300}>
                  Feed
                </Link>
              </li>

              <li>
                <Link to="contact" smooth={true} duration={300}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes
                size={25}
                style={{ color: "#333", textAlign: "center" }}
              />
            ) : (
              <FaBars
                size={25}
                style={{ color: "#333", textAlign: "center" }}
              />
            )}
            {/* <FaBars size={25} style = {{color:'#333', textAlign : 'center'}} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
