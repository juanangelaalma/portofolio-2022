import React, {useEffect} from "react";
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/png/logo.png";
import "./navbar.css";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { BsMedium, BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';

const Menu = ({ active, setActive }) => (
  <>
    <Fade duration={500} top>
      <p className={active === 'home' ? "active" : ''}>
        <a onClick={() => setActive('home')} href="#home">About Me</a>
      </p>
    </Fade>
    <Fade duration={700} top>
      <p className={active === 'portfolio' ? "active" : ''}>
        <a onClick={() => setActive('portfolio')} href="#portfolio">Portfolio</a>
      </p>
    </Fade>
    <Fade duration={900} top>
      <p className={active === 'contact' ? "active" : ''}>
        <a onClick={() => setActive('contact')} href="#contact">Contact</a>
      </p>
    </Fade>
    {/* <p>
      <a href="#blog">Blog</a>
    </p> */}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState('home')
  const [isDark, setIsDark] = useState(false)

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
          <Menu active={active} setActive={setActive} />
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
          {/* { isDark ? <BsSun onClick={() => setIsDark(false)} size={24} /> : <FiMoon onClick={() => setIsDark(true)} size={24} /> } */}
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
              <Menu active={active} setActive={setActive} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
