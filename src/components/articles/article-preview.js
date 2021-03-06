import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => {
  return (
    <div className={styles.preview}>
      <h2 className={styles.previewTitle}>{article.title.toUpperCase()}</h2>
      {/* <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      /> */}
      <p>{article.description.description}</p>
      {/* <small>{article.publishDate}</small> */}
      {/* <div className={styles.button}>
        <Link to={`/blog/${article.slug}`}>READ FULL ARTICLE</Link>
      </div> */}
      <div className={styles.button}>
        <Link to={`${article.link}`}>READ FULL ARTICLE</Link>
      </div>
    </div>
  );
};

// export default ({ article }) => (
//   <div className={styles.preview}>
//     <Img alt="" fluid={article.heroImage.fluid} />
//     <h3 className={styles.previewTitle}>
//       <Link to={`/blog/${article.slug}`}>{article.title}</Link>
//     </h3>
//     <small>{article.publishDate}</small>
//     <p
//       dangerouslySetInnerHTML={{
//         __html: article.description.childMarkdownRemark.html,
//       }}
//     />
//   </div>
// );
