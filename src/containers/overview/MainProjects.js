import React from 'react'
import HeaderOfList from '../../components/headoflist/HeaderOfList'

import "./main-project.css"
import MedikuImage from "../../assets/images/projects/main/mediku.webp"
import AksiHijauImage from "../../assets/images/projects/main/aksihijau.webp"
import SivreImage from "../../assets/images/projects/main/sivre.webp"
import FeaturedProject from '../../components/featured-project/FeaturedProject'
import Mediku from '../../projects-preview/Mediku'
import AksiHijau from '../../projects-preview/AksiHijau'
import Sivre from '../../projects-preview/Sivre'

const featuredProjects = [
  {
    image: MedikuImage,
    title: "Mediku",
    stacks: "React Native,JavaScipt,MySql,Tensorflow,Google Cloud",
    description: "An AI-powered medical app addressing child stunting innovatively optimizes growth and development, streamlining health monitoring, offering timely nutrition guidance, and transforming child care practices, potentially preventing long-term health issues for future generations.",
    video: "https://www.youtube.com/watch?v=uqxR8NilvI0",
    github: "https://github.com/MantaSetel/MedikuApp",
    preview: <Mediku />
  },
  {
    image: AksiHijauImage,
    title: "AksiHijau",
    stacks: "Kotlin,JavaScipt,MySql,Tensorflow,Google Cloud",
    description: "An environmental care app focusing on reducing future environmental damage. This app emphasizes tree planting as an effective solution for environmental issues, utilizing ML/AI to classify soil types and recommend suitable plants.",
    url: "https://drive.google.com/drive/folders/1NYD-Gkf53xna0E7fMiJnmjpQWmW5rXbk",
    github: "https://github.com/Aksi-Hijau",
    video: "https://youtu.be/YWVkwioP6Zo",
    preview: <AksiHijau />
  },
  {
    image: SivreImage,
    title: "SIVRE",
    stacks: "Laravel,React JS,MySql,TailwindCSS",
    description: "SIVRE (Sistem Informasi Voting Remas El Muna) is a voting application used for the selection of the youth organization's chairman at Masjid Agung Al Munawwar Tulungagung.",
    url: "https://sivre.vercel.app",
    github: "https://github.com/juanangelaalma/sivre",
    preview: <Sivre />
  },
]

const MainProjects = ({ handlePreviewClick }) => {
  return (
    <section id="portfolio" className="main-project section__padding">
      <HeaderOfList title="Some Things I’ve Built" ulrshowmore="https://github.com/juanangelaalma"/>
      { featuredProjects.map((project, index) => (
        <FeaturedProject preview={project.preview} handlePreviewClick={handlePreviewClick} key={index} image={project.image} title={project.title} stacks={project.stacks} description={project.description} url={project.url} video={project.video} github={project.github} />
      ))}
    </section>
  )
}

export default MainProjects