import React from "react";

import "./project.css";

const Project = ({ img, title, desc, url }) => {
  return (
    <a target="__blank" href={url} className="porto__portofolio-list_project">
      <div className="porto__portofolio-list_project-img">
        <img src={img} alt={title} />
      </div>
      <div className="porto__portofolio-list_project-content">
        <h1>{ title }</h1>
        <p>
          { desc }
        </p>
      </div>
    </a>
  );
};

export default Project;
