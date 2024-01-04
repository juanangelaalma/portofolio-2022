import React from "react";
import LazyLoad from 'react-lazy-load';
import ProjectLinks from "../project-links/ProjectLinks";

import "./project.css";

const Project = ({ img, title, desc, url, github, video }) => {
  return (
    <div className="porto__portofolio-list_project">
      <div className="porto__portofolio-list_project-img">
          <LazyLoad height={180} once={true} offsetVertical={300}>
              <img src={img} alt={title} />
          </LazyLoad>
      </div>
      <div className="porto__portofolio-list_project-content">
        <h1>{ title }</h1>
        <p dangerouslySetInnerHTML={{__html: desc}}>
        </p>
      </div>
      <ProjectLinks video={video} github={github} url={url} className="porto_portofolio-list_project-links" />
    </div>
  );
};

export default Project;
