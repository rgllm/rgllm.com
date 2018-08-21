import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import { Link } from 'react-router-dom';


class Header extends React.Component {
    constructor() {
      super();
    }

    render() {
        return (
            <div className="home page-template page-template-parts">
                <header className="site-header section-inner">
                    <div className="header-left">
                        <h1 className="site-title">
					        <Link to="/" title="Rogério Moreira">Rogério Moreira</Link>
				        </h1>
                        <ul className="menu main-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item"><Link to="/">Home</Link></li>
                            {/* <li className="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/about">About me</Link></li> */}
                            <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.blog.rgllm.com/">Writing</a></li>
				        </ul>
                    </div>
			        <div className="header-right">
                        <div className="social">
                            <a href="https://www.twitter.com/rgllm" className="twitter"><span>Twitter</span></a>
                            <a href="https://github.com/rgllm" className="github"><span>Github</span></a>
                            <a href="https://www.instagram.com/rgllm" className="instagram"><span>Instagram</span></a>
                            <a href="mailto:r@rgllm.com" className="email"><span>Email</span></a>
                        </div>
			        </div>
                </header>
            </div>
        );}

}

export default Header;