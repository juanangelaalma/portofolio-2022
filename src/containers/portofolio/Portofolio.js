import React from "react";
import HeaderOfList from "../../components/headoflist/HeaderOfList";
import Project from "../../components/project/Project";

import "./portofolio.css";

const Portofolio = () => {
  return (
    <section className="porto__portofolio section__padding">
      <HeaderOfList title="My Portofolio" ulrshowmore="/"/>
      <div className="porto_portofolio-list">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Portofolio;
