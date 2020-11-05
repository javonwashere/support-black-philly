import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import HeroImages from "../components/hero/hero";
import Layout from "../components/layout";
import "../index.css";
import Sidebar from "../components/sidebar/sidebar";
import Mission from "../components/mission-statement/mission-statement";
import Articles from "../components/articles/articles";
import Newsletter from "../components/newsletter/newsletter";
import BuyBlack from "../components/buy-black/buy-black";

class RootIndex extends React.Component {
  render() {
    let siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");
    const newsletterDetails = get(
      this,
      "props.data.allContentfulNewsletter.nodes"
    );
    siteTitle = "Support Black Philly";
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div class="grid-container">
            <div class="content">
              <HeroImages />
              <Mission />
              <Articles posts={posts} />
              <Newsletter data={newsletterDetails} />
            </div>
            <Sidebar />
          </div>
          <div class="grid-container-mobile">
            <div class="content">
              <div className="left-img"></div>
              <BuyBlack />
              <Mission />
              <div className="right-img"></div>
              <Articles posts={posts} />
              <Newsletter data={newsletterDetails} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulNewsletter {
      nodes {
        content {
          content
        }
        mailchimpEndpoint
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
