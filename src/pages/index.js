import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import HeroImages from "../components/hero/hero";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar/sidebar";
import Mission from "../components/mission-statement/mission-statement";
import Articles from "../components/articles/articles";
import Newsletter from "../components/newsletter/newsletter";
import BuyBlack from "../components/buy-black/buy-black";
import Header from "../components/header/header";
import Img from "gatsby-image";
import scrollDownWhite from "../assets/scrolldown_white.png";

class RootIndex extends React.Component {
  render() {
    let siteTitle = get(this, "props.data.site.siteMetadata.title");
    // const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const posts = get(this, "props.data.allContentfulArticle.edges");
    const featuredImages = get(
      this,
      "props.data.allContentfulHomepageFeaturedImages.edges"
    );
    const [author] = get(this, "props.data.allContentfulPerson.edges");
    const newsletterDetails = get(
      this,
      "props.data.allContentfulNewsletter.nodes"
    );

    const missionStatementDetails = get(
      this,
      "props.data.allContentfulMissionStatement.nodes"
    );

    const socialMediaLinks = get(
      this,
      "props.data.allContentfulSocialMediaLinks.edges"
    );

    console.log("SOCIAL LINKS", socialMediaLinks);

    console.log("WTF", missionStatementDetails);
    siteTitle = "Support Black Philly";
    return (
      <React.Fragment>
        <Header data={socialMediaLinks[0].node} />
        <Layout location={this.props.location}>
          <div style={{ background: "#fff" }}>
            <Helmet title={siteTitle} />
            <div class="grid-container">
              <div class="content">
                <HeroImages featuredImages={featuredImages[0].node} />
                <Mission data={missionStatementDetails} />
                <Articles posts={posts} />
                <Newsletter data={newsletterDetails} />
              </div>
              <Sidebar />
            </div>
            <div class="grid-container-mobile">
              <div class="content">
                <div className="hero-mobile">
                  <div className="down-caret">
                    <img src={scrollDownWhite} />
                  </div>
                  <div className="left-img mobile-left">
                    <Img fluid={featuredImages[0].node.imgOne.fluid} />
                  </div>
                </div>
                <BuyBlack />
                <Mission data={missionStatementDetails} />
                <div className="right-img">
                  <Img
                    //   className={styles.heroImage}
                    //   alt={data.name}
                    fluid={featuredImages[0].node.imgTwo.fluid}
                  />
                </div>
                <Articles posts={posts} />
                <Newsletter data={newsletterDetails} />
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
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
    allContentfulSocialMediaLinks {
      edges {
        node {
          facebook
          instagram
          twitter
        }
      }
    }
    allContentfulArticle {
      edges {
        node {
          description {
            description
          }
          title
          link
        }
      }
    }
    allContentfulMissionStatement {
      nodes {
        title
        content {
          content
        }
      }
    }
    allContentfulSocialMediaLinks {
      edges {
        node {
          facebook
          instagram
          twitter
        }
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
    allContentfulHomepageFeaturedImages {
      edges {
        node {
          imgOne {
            fluid(quality: 90, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          imgTwo {
            fluid(quality: 90, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
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
