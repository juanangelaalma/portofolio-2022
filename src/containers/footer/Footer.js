import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

import logo from "../../assets/png/logo.png"
import reactIcon from '../../assets/images/react-icon.png'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='porto__footer section__padding'>
      <div className="porto__footer-brand">
        <img src={logo} alt="Juan Angela Alma" />
        <p>Copyright © 2022. Juan Angela Alma</p>
      </div>
      <div className="porto__footer-made">
        <h1>Made with</h1>
        <div className="porto__footer-made_logo">
          <AiFillHeart size={45} color="#FF0000" />
          <img src={reactIcon} alt="React Icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer