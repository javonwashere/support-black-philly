import React from "react";
import ArticlePreview from "./article-preview";
import "./articles.css";
import DownCaret from "../down-caret/down-caret";

export default ({ posts }) => {
  return (
    <div className="article-wrapper" style={{position: "relative"}}>
      <div class="header-wrapper">
        <h1 className="section-headline">
          Amplify “Buy Black” Mainstream
        </h1>
      </div>
      <div className="article-list-wrapper">
        {posts.map(({ node }) => {
          return (
            <div className="article" key={node.slug}>
              <ArticlePreview article={node} />
            </div>
          );
        })}
      </div>
      <DownCaret />
    </div>
  );
};
