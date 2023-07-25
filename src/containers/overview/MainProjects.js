import React from 'react'
import HeaderOfList from '../../components/headoflist/HeaderOfList'

import "./main-project.css"
import AksiHijauImage from "../../assets/images/projects/main/aksihijau.webp"
import SivreImage from "../../assets/images/projects/main/sivre.webp"

const MainProjects = () => {
  return (
    <section id="portfolio" className="main-project section__padding">
      <HeaderOfList title="Some Things I’ve Built" ulrshowmore="https://github.com/juanangelaalma"/>
      <div className="main-project__wrapper">
        <div className="main-project__wrapper-img">
          <img src={AksiHijauImage} alt="AksiHijau Application" />
        </div>
        <div className="main-project__wrapper-description">
          <p className="main-project__wrapper-description_badge">Featured Project</p>
          <h4 className="main-project__wrapper-description_title">AksiHijau</h4>
          <p className="main-project__wrapper-description_paragraph">
            An environmental care app focusing on reducing future environmental damage. This app emphasizes tree planting as an effective solution for environmental issues, utilizing ML/AI to classify soil types and recommend suitable plants.
          </p>
          <div className="main-project__wrapper-description_tools">
            <span>Kotlin</span>
            <span>JavaScript</span>
            <span>MySql</span>
            <span>Tensorflow</span>
            <span>Google Cloud</span>
          </div>
          <div className="main-project__wrapper-description_links">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </div>
        </div>
      </div>
      <div className="main-project__wrapper">
        <div className="main-project__wrapper-img">
          <img src={SivreImage} alt="Sistem Informasi Voting Remas El Muna" />
        </div>
        <div className="main-project__wrapper-description">
          <p className="main-project__wrapper-description_badge">Featured Project</p>
          <h4 className="main-project__wrapper-description_title">SIVRE</h4>
          <p className="main-project__wrapper-description_paragraph">SIVRE (Sistem Informasi Voting Remas El Muna) is a voting application used for the selection of the youth organization's chairman at Masjid Agung Al Munawwar Tulungagung.</p>
          <div className="main-project__wrapper-description_tools">
            <span>Laravel</span>
            <span>React JS</span>
            <span>MySql</span>
            <span>TailwindCSS</span>
          </div>
          <div className="main-project__wrapper-description_links">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainProjects