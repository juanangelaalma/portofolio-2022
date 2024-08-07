import React from 'react'
import ProjectLinks from '../project-links/ProjectLinks'

const FeaturedProject = ({ image, title, description, stacks, url, video, github, preview, handlePreviewClick }) => {
  const arrayOfStacks = stacks.split(',')
  
  const onPreviewClick = () => {
    handlePreviewClick({
      title, desc: description, preview, skills: arrayOfStacks,
    })
  }

  return (
    <div className="main-project__wrapper">
        <div className="main-project__wrapper-img">
          <img src={ image } alt={ title } />
          <div className="main-project__wrapper-object"></div>
        </div>
        <div className="main-project__wrapper-description">
          <p className="main-project__wrapper-description_badge">Featured Project</p>
          <h4 className="main-project__wrapper-description_title">{ title }</h4>
          <div className="main-project__wrapper-description_content">
            <p>{ description }</p>
            <ProjectLinks handlePreviewClick={onPreviewClick} video={video} github={github} url={url} className="main-project__wrapper-description_content-links" />
          </div>
          <div className="main-project__wrapper-description_tools">
            { arrayOfStacks.map(stack => (
              <span key={stack}>{ stack }</span>
            )) }
          </div>
          <div className="main-project__wrapper-description_links">
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1={10} y1={14} x2={21} y2={3} />
            </svg>
          </>
          </div>
        </div>
      </div>
  )
}

export default FeaturedProject