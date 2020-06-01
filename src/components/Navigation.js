import React, { Component } from "react";
import { Link } from "gatsby";
import me from "../images/me.png";

export default class Navigation extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src={me} className="favicon" alt="Rogério Moreira" />
              <span className="text">Rogério Moreira</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
