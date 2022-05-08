import React from "react";
import headerImage from "../../assets/images/header.png";
import { AiFillFilePdf } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import reactIcon from "../../assets/images/react-icon.png";
import "./header.css";

import pdf from "../../assets/pdf/Juan Angela Alma.pdf"

const Header = () => {
  return (
    <header id="home" className="porto__header">
      <div className="porto__header-back">
        <div className="porto__header-image">
          <img src={headerImage} alt="Juan Angela Alma" />
        </div>
      </div>
      <div className="porto__header-content section__padding">
        <div className="porto__header-content_left">
          <div className="porto__header-content_left-title">
            <span>I'm</span>
            <h1>Juan Angela Alma</h1>
            <hr />
          </div>
          <p>
            A software developer who has a high passion for learning with a
            team. Have experience with modern software development
          </p>
        </div>
        <div className="porto__header-content_right">
          <div className="porto__header-content_right-service">
            <h5>Service</h5>
            <p>
              Let's create and develop software that is of good quality, modern,
              beautiful, and according to business needs with me
            </p>
          </div>
          <div className="porto__header-content_right-interest">
            <h5>My Interests</h5>
            <div className="porto__header-content_right-interest_list">
              <img src={reactIcon} alt="React Icon" />
              <span>Web Development</span>
            </div>
            <div className="porto__header-content_right-interest_cta">
              <a href={pdf} download className="btn-main">
                {" "}
                <AiFillFilePdf size={20} /> Download CV
              </a>
              <a target="__blank" href="https://www.instagram.com/juanalmaa/">
              <BsInstagram size={30} />
              </a>
              <a target="__blank" href="https://t.me/juanalmaa">
              <FaTelegramPlane size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
