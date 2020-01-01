import React, { Component } from "react";
import { Link } from "gatsby";
import me from "../images/me.png";
import ThemeContext from "../context/ThemeContext";

export default class Navigation extends Component {
  static contextType = ThemeContext;

  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { menuLinks } = this.props;

    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
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
