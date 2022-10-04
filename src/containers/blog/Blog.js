import React from "react";

import Article from "../../components/article/Article";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-header">
        <h1>I blog about my experience📚</h1>
      </div>
      <div className="gpt3__blog-container">
        <Article
          image="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
      </div>
    </div>
  );
};

export default Blog;