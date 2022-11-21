import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { BsFillHeartFill, BsHouseDoorFill } from "react-icons/bs";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand fs-26">
              Saadoune.
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white flex">
                  <BsHouseDoorFill size={14} />
                  &nbsp;
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white flex">
                  <BsFillHeartFill size={14} />
                  &nbsp;
                  <Link to="/favourites">Favourites</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
