import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h3 className="text-uppercase header-title">know about music</h3>
          <p className="text-lead text-justify ">
            Music creates social cohesion, it speaks to all when words can fail,
            and wherever you go in the world, it is understood. Music is a
            universal gift and its power to connect people is without question.
            It is an art form with human interaction at its centre.
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <span className="container">Find your music</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
