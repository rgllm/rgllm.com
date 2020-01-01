import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <p className="footer__top">Copyleft © [what-year-is-this]</p>
        <p className="footer__bottom">
          Not currently looking for a job, but here's my résumé if you're into
          that.
        </p>
      </footer>
    );
  }
}
