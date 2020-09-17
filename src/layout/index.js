import React, { Component } from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import favicon from "../images/favicon.png";
import social from "../images/social.png";
import "../styles/main.scss";

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={config.siteDescription} />
          <meta property="og:title" content="Rogério Moreira" />
          <meta property="og:description" content={config.siteUrl} />
          <meta property="og:image" content={social} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={config.siteUrl} />
          <meta property="twitter:title" content="Rogério Moreira" />
          <meta property="twitter:description" content={config.siteDescription} />
          <meta property="twitter:image" content={social} />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    );
  }
}
