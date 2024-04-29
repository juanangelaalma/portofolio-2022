import React from "react";

import Article from "../../components/article/Article";
import "./blog.css";
import HeaderOfList from "../../components/headoflist/HeaderOfList";

const Blog = () => {
  return (
    <div id="blog" className="gpt3__blog section__padding">
      <HeaderOfList title="I blog about my experience📚" ulrshowmore="https://github.com/juanangelaalma"/>
      <div className="gpt3__blog-container">
        <Article
          image="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy3kp85olcrwhy9rekokw.jpeg"
          title="Mengenal SOLID: Memahami Setiap Prinsip dan Menerapkannya Secara Efektif"
          date="Apr 11, 2024"
          url="https://dev.to/juanangelaalma/solid-principle-3kpl"
        />
        <Article
          image="https://media.licdn.com/dms/image/D5612AQFAze1UgTGEGg/article-cover_image-shrink_423_752/0/1681368095917?e=1720051200&v=beta&t=j_8JB1pOUpzVF_lOUHV4rbkG8DqBFG97NHWm4y-wHuY"
          title="5 Ways of Adaptability: Surviving and Thriving in the Bangkit Program"
          date="Apr 13, 2023"
          url="https://www.linkedin.com/pulse/5-ways-adaptability-surviving-thriving-bangkit-juan-angela-alma/?trackingId=3KEQgnfpKIycR6voWalwbA%3D%3D"
        />
        <Article
          image="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnbh6ihtzt1y5tvh5sf4n.png"
          title="Menggunakan Absolute Import pada React JS"
          date="Apr 11, 2024"
          url="https://dev.to/juanangelaalma/menggunakan-absolute-import-pada-react-js-30eb"
          />
        <Article
          image="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz9tw6pl8fhsvn3mbkn89.jpg"
          title="Upload File di Node JS"
          date="Apr 11, 2024"
          url="https://dev.to/juanangelaalma/upload-file-di-node-js-4j3c"
        />
        <Article
          image="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gp1j1gMl4krhTjDO"
          title="Mengenal Docker"
          date="Nov 4, 2021"
          url="https://medium.com/@juanalma/mengenal-docker-18b9535dd7a0"
        />
      </div>
    </div>
  );
};

export default Blog;