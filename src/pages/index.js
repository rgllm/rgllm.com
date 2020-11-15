import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import mefinger from "../images/me-finger.png";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import projects from "../../data/projects";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <p>
                Hello 👋. My name is Rogério and I am a software engineer living and working from Braga, Portugal 🇵🇹.
                I contribute to <a href="https://github.com/rgllm/" rel="noreferrer" target="_blank" title="rgllm Github" data-splitbee-event={`Clicked homepage rgllm GitHub`}>open-source</a> projects 🔨 and 
                write about tech, life and software engineering ✍️. 
              </p>
            </div>
            <img className="main-image" src={mefinger} alt="Rogério Moreira" />
          </div>
        </div>
        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Posts
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>
          <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
