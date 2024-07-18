import React from "react";
import ProjectLinks from "../project-links/ProjectLinks";

import "./project.css";

const Project = ({ img, title, desc, url, github, video, preview, skills, handlePreviewClick }) => {
  const onPreviewClick = () => {
    handlePreviewClick({
      title, desc, preview, skills
    })
  }

  return (
    <div className="porto__portofolio-list_project">
      <div className="porto__portofolio-list_project-img">
        <img src={img} alt={title} />
      </div>
      <div className="porto__portofolio-list_project-content">
        <h1>{ title }</h1>
        <p dangerouslySetInnerHTML={{__html: desc}}>
        </p>
      </div>
      <ProjectLinks handlePreviewClick={onPreviewClick} preview={preview} video={video} github={github} url={url} className="porto_portofolio-list_project-links" />
    </div>
  );
};

export default Project;
