import React from "react";
import HeaderOfList from "../../components/headoflist/HeaderOfList";
import Project from "../../components/project/Project";

import "./portofolio.css";

import img1 from "../../assets/images/projects/project1.jpg"
import img2 from "../../assets/images/projects/project2.jpg"
import img3 from "../../assets/images/projects/project3.jpg"
import img4 from "../../assets/images/projects/project4.jpeg"
import img5 from "../../assets/images/projects/project5.jpeg"
import img6 from "../../assets/images/projects/project6.jpeg"

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
    desc: "A company profile and blog for Masjid Agung Al Munawwar Tulungagung. This website was built with ReactJS for frontend and Laravel for backend. ",
    url: "http://almunawwartulungagung.online/"
  },
  {
    img: img3,
    title: "Beautiful UI",
    desc: "A beautiful landing page built with React JS and pure CSS without any framework",
    url: "https://modern-new.netlify.app"
  },
  {
    img: img4,
    title: "Bumil Sehat",
    desc: "Bumilsehat is an application for pregnant women in order to maintain their pregnancy. Has a pregnancy reminder feature that will be sent via email. There are also features for quizzes and evaluations. Also has a feature to view pregnancy material",
    url: "https://bumilsehat.com"
  },
  {
    img: img5,
    title: "Lab Management System",
    desc: "lab management system is a website for a list of visits, inventory, users. There are two roles, namely staff and guest",
    url: "https://lms-kel-8.herokuapp.com/"
  },
  {
    img: img6,
    title: "Peduly.com",
    desc: "Peduly is crowdfunding platform for social impact, ready to make a better society through kindness and heart.",
    url: "https://peduly.com/"
  }
]

const Portofolio = () => {
  return (
    <section id="portfolio" className="porto__portofolio section__padding">
      <HeaderOfList title="My Portfolio" ulrshowmore="https://github.com/juanangelaalma"/>
      <div className="porto_portofolio-list">
        { projects.map((p, index) => (
          <Project key={index} img={p.img} title={p.title} desc={p.desc} url={p.url} />
        )) }
      </div>
    </section>
  );
};

export default Portofolio;
