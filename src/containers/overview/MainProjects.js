import React from 'react'
import HeaderOfList from '../../components/headoflist/HeaderOfList'

import "./main-project.css"
import MedikuImage from "../../assets/images/projects/main/mediku.webp"
import AksiHijauImage from "../../assets/images/projects/main/aksihijau.webp"
import SivreImage from "../../assets/images/projects/main/sivre.webp"
import FeaturedProject from '../../components/featured-project/FeaturedProject'

const featuredProjects = [
  {
    image: MedikuImage,
    title: "Mediku",
    stacks: "React Native,JavaScipt,MySql,Tensorflow,Google Cloud",
    description: "An AI-powered medical app addressing child stunting innovatively optimizes growth and development, streamlining health monitoring, offering timely nutrition guidance, and transforming child care practices, potentially preventing long-term health issues for future generations.",
  },
  {
    image: AksiHijauImage,
    title: "AksiHijau",
    stacks: "Kotlin,JavaScipt,MySql,Tensorflow,Google Cloud",
    description: "An environmental care app focusing on reducing future environmental damage. This app emphasizes tree planting as an effective solution for environmental issues, utilizing ML/AI to classify soil types and recommend suitable plants.",
  },
  {
    image: SivreImage,
    title: "SIVRE",
    stacks: "Laravel,React JS,MySql,TailwindCSS",
    description: "SIVRE (Sistem Informasi Voting Remas El Muna) is a voting application used for the selection of the youth organization's chairman at Masjid Agung Al Munawwar Tulungagung.",
  },
]

const MainProjects = () => {
  return (
    <section id="portfolio" className="main-project section__padding">
      <HeaderOfList title="Some Things I’ve Built" ulrshowmore="https://github.com/juanangelaalma"/>
      { featuredProjects.map((project, index) => (
        <FeaturedProject key={index} image={project.image} title={project.title} stacks={project.stacks} description={project.description} />
      ))}
    </section>
  )
}

export default MainProjects