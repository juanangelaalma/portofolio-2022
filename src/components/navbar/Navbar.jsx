import React, {useEffect} from "react";
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/png/logo.png";
import "./navbar.css";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs';

const Menu = () => (
  <>
    <Fade duration={500} top>
      <p className="active">
        <a href="#home">Home</a>
      </p>
    </Fade>
    <Fade duration={700} top>
      <p>
        <a href="#portofolio">Portofolio</a>
      </p>
    </Fade>
    <Fade duration={900} top>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </Fade>
    {/* <p>
      <a href="#blog">Blog</a>
    </p> */}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.porto__navbar')
    window.addEventListener('scroll', function () {
      if(window.scrollY > 500) {
        navbar.classList.add('glassEffect');
      }else {
        navbar.classList.remove('glassEffect');
      }
    });
  }, [])

  return (
    <nav className="porto__navbar">
      <div className="porto__navbar-links">
        <Fade top duration={300}>
          <div className="porto__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        </Fade>
        <div className="porto__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="porto__navbar-media">
        <Fade duration={1100} top>
          <a target="__blank" href="https://github.com/juanangelaalma">
            <AiFillGithub size={24} />
          </a>
        <a target="__blank" href="https://www.linkedin.com/in/juanangelaalma/">
          <AiFillLinkedin size={24} />
        </a>
        <a target="__blank" href="https://medium.com/@juanalma">
          <BsMedium size={24} />
        </a>
        </Fade>
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
