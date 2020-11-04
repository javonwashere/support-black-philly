import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import HeroImages from "../components/hero/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import "../index.css";
import Sidebar from "../components/sidebar/sidebar";
import ReactSnapScroll from "react-snap-scroll";
import Mission from "../components/mission-statement/mission-statement";

class RootIndex extends React.Component {
  render() {
    let siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");
    siteTitle = "Support Black Philly";
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div class="grid-container">
            <div class="content">
              {/* <Hero data={author.node} /> */}
              <ReactSnapScroll transition="move-top-bottom">
                <HeroImages />
                <Mission />
              </ReactSnapScroll>

              {/* <div className="wrapper">
                <h2 className="section-headline">Recent articles</h2>
                <ul className="article-list">
                  {posts.map(({ node }) => {
                    return (
                      <li key={node.slug}>
                        <ArticlePreview article={node} />
                      </li>
                    );
                  })}
                </ul>
              </div> */}
            </div>
            <Sidebar />
          </div>
        </div>
      </Layout>
    );
  }
}
export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;