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
            <div class="home page-template page-template-parts">
                <header class="site-header section-inner">
                    <div class="header-left">
                        <h1 class="site-title">
					        <Link to="/" title="Rogério Moreira">Rogério Moreira</Link>
				        </h1>
                        <ul class="menu main-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item"><Link to="/">Home</Link></li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/about">About me</Link></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.blog.rgllm.com/">Writing</a></li>
				        </ul>
                    </div>
			        <div class="header-right">
                        <div class="social">
                            <a href="https://www.twitter.com/rgllm" class="twitter"><span>Twitter</span></a>
                            <a href="https://github.com/rgllm" class="github"><span>Github</span></a>
                            <a href="https://www.instagram.com/rgllm" class="instagram"><span>Instagram</span></a>
                            <a href="mailto:r@rgllm.com" class="email"><span>Email</span></a>
                        </div>
			        </div>
                </header>
            </div>
        );}

}

export default Header;