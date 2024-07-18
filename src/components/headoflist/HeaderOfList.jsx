import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./header-of-list.css";

const HeaderOfList = ({ title, ulrshowmore, className }) => {
    return (
        <div className={`header__list ${className ? className : ""}`}>
            <h1>{title}</h1>
            {ulrshowmore && (
                <a href={ulrshowmore} className="header__list-showmore">
                    Show more <BsArrowRightShort size={40} />
                </a>
            )}
        </div>
    );
};

export default HeaderOfList;
