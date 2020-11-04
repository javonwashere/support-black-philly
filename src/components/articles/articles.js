import React from "react";
import ArticlePreview from "./article-preview";
import "./articles.css";

export default ({ posts }) => {
  return (
    <div className="article-wrapper">
      <h1 className="section-headline">Amplify “Buy Black” <br /> Mainstream</h1>
      <div className="article-list-wrapper">
        {posts.map(({ node }) => {
          return (
            <div className="article" key={node.slug}>
              <ArticlePreview article={node} />
            </div>
          );
        })}
      </div>
    </div>
  );
};