import React from 'react'
import { MdEmail } from 'react-icons/md'

import contactImage from "../../assets/images/contact.png"
import "./contact.css"

const Contact = () => {
  return (
    <section className="porto__contact section__padding">
      <div className="porto__contact-img">
        <img src={contactImage} alt="Juan Angela Alma" />
      </div>
      <div className="porto__contact-content">
        <h1>Let's talk about everything</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde quia illo consequatur neque obcaecati atque ullam animi cum corrupti, incidunt aliquid fugiat temporibus inventore at sunt eius commodi odio.</p>
        <button className='btn-main'><MdEmail size={20} /> Email</button>
      </div>
    </section>
  )
}

export default Contact