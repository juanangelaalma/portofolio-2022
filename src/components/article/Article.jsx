import React from 'react'

import './article.css'

const Article = ({ image, title, date, url }) => {
  return (
    <a target='__blank' href={url} className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-body'>
        <div className='gpt3__blog-container__article-body__image'>
          <img src={image} alt={title} />
        </div>
        <div className="gpt3__blog-container__article-body__content">
          <span className='styling__text'>{ date }</span>
          <h1>{ title }</h1>
        </div>
      </div>
      {/* <div className='gpt3__blog-container__article-footer'>
        <p>Read Full Article</p>
      </div> */}
    </a>
  )
}

export default Article