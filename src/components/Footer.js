import React, { Component } from "react";
import { Link } from "gatsby";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <p className="footer__top">Copyleft © [what-year-is-this]</p>
        <p className="footer__bottom">
          Not currently looking for a job, but here's my <Link to="/resume">resume</Link> if you're into
          that.
        </p>
      </footer>
    );
  }
}
