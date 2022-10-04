import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import LazyLoad from 'react-lazy-load';

import "./project.css";

const Project = ({ img, title, desc, url }) => {
  return (
    <a target="__blank" href={url} className="porto__portofolio-list_project">
      <div className="porto__portofolio-list_project-img">
          <LazyLoad height={180} offsetVertical={300}>
              <img src={img} alt={title} />
          </LazyLoad>
      </div>
      <div className="porto__portofolio-list_project-content">
        <h1>{ title }</h1>
        <p dangerouslySetInnerHTML={{__html: desc}}>
        </p>
      </div>
    </a>
  );
};

export default Project;
