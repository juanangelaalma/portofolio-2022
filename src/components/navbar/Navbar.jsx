import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/png/logo.png";
import "./navbar.css";

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs';

const Menu = () => (
  <>
    <p className="active">
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#portofolio">Portofolio</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
    {/* <p>
      <a href="#blog">Blog</a>
    </p> */}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="porto__navbar">
      <div className="porto__navbar-links">
        <div className="porto__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="porto__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="porto__navbar-media">
        <a target="__blank" href="https://github.com/juanangelaalma">
          <AiFillGithub size={24} />
        </a>
        <a target="__blank" href="https://www.linkedin.com/in/juanangelaalma/">
          <AiFillLinkedin size={24} />
        </a>
        <a target="__blank" href="https://medium.com/@juanalma">
          <BsMedium size={24} />
        </a>
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
    </nav>
  );
};

export default Navbar;
