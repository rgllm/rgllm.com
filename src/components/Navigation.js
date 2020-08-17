import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to="/" data-splitbee-event={`Clicked logo`}>
              <span className="text">Rogério Moreira</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active" data-splitbee-event={`Clicked header link ${link.name}`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
