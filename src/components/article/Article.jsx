import React from 'react'
import PropTypes from 'prop-types'

import './article.css'

const Article = ({ image, title, date }) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-body'>
        <div className='gpt3__blog-container__article-body__image'>
          <img src={image} alt={title} />
        </div>
        <div className="gpt3__blog-container__article-body__content">
          <p>{ date }</p>
          <h1>{ title }</h1>
        </div>
      </div>
      <div className='gpt3__blog-container__article-footer'>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article