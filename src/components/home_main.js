import React from "react";

import "../../src/main.css";
import { GoHeart } from "react-icons/go";
import { GoSmiley } from "react-icons/go";

const Article = props => {
  let date = new Date().toDateString();

  return (
    <div className="banner">
      <div className="banner-container">
        <h1 className="banner-heading">Please Sign up for access </h1>
        <p className="banner-title">A Place to share your knowledge</p>
      </div>
    </div>
  );
};

export default Article;
