import React from "react";
import HeaderOfList from "../../components/headoflist/HeaderOfList";
import Project from "../../components/project/Project";

import "./portofolio.css";

import img1 from "../../assets/images/projects/project1.jpg"
import img2 from "../../assets/images/projects/project2.jpg"
import img3 from "../../assets/images/projects/project3.jpg"

const projects = [
  {
    img: img1,
    title: "My Shop E-Commerce",
    desc: "An e-commerce website was built with ReactJS and API from Fakestoreapi. This website is still under development. This website implements async state management with redux-thunk.",
    url: "https://myshoppp.netlify.app/"
  },
  {
    img: img2,
    title: "El Muna Company Profile",
    desc: "A company profile and blog for Masjid Agung Al Munawwar Tulungagung. This website was built with ReactJS for frontend and Laravel for backend.",
    url: "http://almunawwartulungagung.online/"
  },
  {
    img: img3,
    title: "Beautiful UI",
    desc: "A beautiful landing page built with React JS and pure CSS without any framework",
    url: "https://modern-new.netlify.app"
  }
]

const Portofolio = () => {
  return (
    <section id="portofolio" className="porto__portofolio section__padding">
      <HeaderOfList title="My Portofolio" ulrshowmore="https://github.com/juanangelaalma"/>
      <div className="porto_portofolio-list">
        { projects.map(p => (
          <Project img={p.img} title={p.title} desc={p.desc} url={p.url} />
        )) }
      </div>
    </section>
  );
};

export default Portofolio;
