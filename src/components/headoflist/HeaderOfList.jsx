import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./header-of-list.css"

const HeaderOfList = ({ title, ulrshowmore }) => {
  return (
    <div className="header__list">
      <h1>{ title }</h1>
      <a href={ulrshowmore} className="header__list-showmore">
        Show more <BsArrowRightShort size={40} />
      </a>
    </div>
  );
};

export default HeaderOfList;
