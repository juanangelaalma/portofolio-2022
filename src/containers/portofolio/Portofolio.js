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
import img7 from "../../assets/images/projects/project7.jpg"
import img8 from "../../assets/images/projects/project8.jpg"
import img9 from "../../assets/images/projects/project9.jpg"
import img10 from "../../assets/images/projects/project10.jpg"
import img11 from "../../assets/images/projects/project11.jpg"
import img12 from "../../assets/images/projects/project12.jpg"
import { useEffect } from "react";

const projects = [
  {
    img: img1,
    title: "My Shop E-Commerce",
    desc: "An <span class='styling__text'>E-Commerce</span> website was built with <span class='styling__text'>ReactJS</span> and API from <span class='styling__text'>Fakestoreapi</span> 🩳. This website implements async state management with <span class='styling__text'>Redux-Thunk</span>💍.",
    url: "https://myshoppp.netlify.app/"
  },
  {
    img: img2,
    title: "El Muna Company Profile",
    desc: "A company profile and blog for Masjid Agung <span class='styling__text'>Al Munawwar</span> Tulungagung 🕌. This website was built with <span class='styling__text'>ReactJS</span> for frontend and <span class='styling__text'>Laravel</span> for backend. ",
    url: "http://almunawwartulungagung.online/"
  },
  {
    img: img3,
    title: "Landing page",
    desc: "A beautiful landing page built with <span class='styling__text'>React JS</span> and pure <span class='styling__text'>CSS</span> without any framework👩‍🦳",
    url: "https://modern-new.netlify.app"
  },
  {
    img: img4,
    title: "Bumil Sehat",
    desc: "<span class='styling__text'>Bumil Sehat</span> is an application for pregnant women in order to <span class='styling__text'>maintain</span> their pregnancy 🤰. Has a pregnancy <span class='styling__text'>reminder</span> feature that will be sent via email 📧. There are also features for <span class='styling__text'>quizzes</span> and <span class='styling__text'>evaluations</span>. Also has a feature to view pregnancy <span class='styling__text'>material</span>",
    url: "https://bumilsehat.com"
  },
  {
    img: img5,
    title: "Lab Management System",
    desc: "<span class='styling__text'>Lab Management System</span> is a website for a list of visits, inventory, users 🧪. There are two roles, namely staff and guest🧑‍🏭",
    url: "https://lms-kel-8.herokuapp.com/"
  },
  {
    img: img6,
    title: "Peduly.com",
    desc: "<span class='styling__text'>Peduly</span> is crowdfunding platform for social impact, ready to make a better society through <span class='styling__text'>kindness and heart</span> 😍.",
    url: "https://peduly.com/"
  },
  {
    img: img7,
    title: "Gulu Gulu",
    desc: "Gulu Gulu is a <span class='styling__text'>Google Clone</span> website that uses google public API 💻. Build with <span class='styling__text'>ReactJS</span> and <span class='styling__text'>TailwindCSS</span>. Has fiture light mode and dark mode 🌓.",
    url: "https://gulugulu.vercel.app/"
  },
  {
    img: img8,
    title: "Markdown Previewer",
    desc: "A website <span class='styling__text'>markdown</span> that can previews <span class='styling__text'>Markdown</span> text ✒️. Build with <span class='styling__text'>ReactJS</span>",
    url: "https://codepen.io/juanalma/full/zYzYEZv"
  },
  {
    img: img9,
    title: "Drum Simulator",
    desc: "A website that <span class='styling__text'>simulates</span> a drum 🥁. Can be operate with keyboard ⌨️. Build with <span class='styling__text'>ReactJS</span>",
    url: "https://codepen.io/juanalma/full/KKqpjWj"
  },
  {
    img: img10,
    title: "Medicine Web Template",
    desc: "The web medicine template 🧑‍⚕️ is a <span class='styling__text'>responsive</span> and user-friendly website designed using <span class='styling__text'>Bootstrap 5</span>. It is an ideal platform for healthcare professionals and medical organizations to showcase their services and information online. 🩺",
    url: "https://medical-uts.vercel.app/"
  },
  {
    img: img11,
    title: "Teeth.id",
    desc: "Teeth.id is a web-based <span class='styling__text'>dental</span> clinic project 🩺 that aims to provide a comprehensive platform for dental care and education 🦷. The platform includes several features such as a <span class='styling__text'>forum, an article section, and a consultation booking</span> feature⌚",
    url: "https://github.com/juanangelaalma/teeth.id"
  },
  {
    img: img12,
    title: "Volunteer Peduly",
    desc: "The website is a platform that hosts a list of data on <span class='styling__text'>volunteers</span> 😎. The purpose of the website is to connect volunteers with organizations or individuals who are in need of their <span class='styling__text'>services</span>😍.",
    url: "https://volunteer.peduly.com/"
  },
]

const Portofolio = () => {
  useEffect(() => console.log('portofolio'), [])
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
