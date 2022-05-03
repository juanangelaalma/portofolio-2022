import React from "react";
import headerImage from "../../assets/images/header.png";
import { AiFillFilePdf } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

import reactIcon from "../../assets/images/react-icon.png";
import "./header.css";

const Header = () => {
  return (
    <header className="porto__header">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
            est dignissimos molestiae commodi aliquam saepe ipsum, enim beatae,
            ducimus expedita adipisci labore. Qui, alias velit ipsam temporibus
            soluta in!
          </p>
        </div>
        <div className="porto__header-content_right">
          <div className="porto__header-content_right-service">
            <h5>Service</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              asperiores, repellendus accusamus adipisci repellat, amet ut esse
            </p>
          </div>
          <div className="porto__header-content_right-interest">
            <h5>My Interests</h5>
            <div className="porto__header-content_right-interest_list">
              <img src={reactIcon} alt="React Icon" />
              <span>Web Development</span>
            </div>
            <div className="porto__header-content_right-interest_cta">
              <button> <AiFillFilePdf /> Download CV</button>
              <BsInstagram size={30} />
              <FaTelegramPlane size={30} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
