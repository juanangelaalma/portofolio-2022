import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/png/logo.png";
import "./navbar.css";

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Menu = () => (
  <>
    <p className="active">
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">Portofolio</a>
    </p>
    <p>
      <a href="#possibility">Contact</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="porto__navbar">
      <div className="porto__navbar-links">
        <div className="porto__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="porto__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="porto__navbar-media">
        <AiFillGithub size={24} />
        <AiFillLinkedin size={24} />
      </div>
      <div className="porto__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="porto__navbar-menu_container scale-up-center">
            <div className="porto__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
