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
                            <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.blog.rgllm.com/">Writing</a></li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/about">About</Link></li>
				        </ul>
                    </div>
			        <div class="header-right">
                        <div class="social">
                            <a href="https://www.twitter.com/rgllm" class="twitter"><span>Twitter</span></a>
                            <a href="https://www.instagram.com/rgllm" class="instagram"><span>Instagram</span></a>
                            <a href="https://github.com/rgllm" class="github"><span>Github</span></a>
                            <a href="mailto:r@rgllm.com" class="email"><span>Email</span></a>
                        </div>
	                    <div class="mobile-menu-overlay"></div>
                        <div class="nav-toggle">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <span class="label">Hide menu</span>
                        </div>
			        </div>
                </header>
                <div class="mobile-menu-container">
                        <h1 class="menu-title"><a href="https://www.rgllm.com">Rogério Moreira</a></h1>
                        <ul class="mobile-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1583 current_page_item menu-item-3496"><a href="https://www.rgllm.com/">Home</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3499"><a href="https://www.blog.rgllm.com/">Writing</a></li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3502"><a href="https://www.rgllm.com/resume.pdf">CV</a></li>
                        </ul>
                        <ul class="social-menu">
                            <li><a href="https://www.twitter.com/rgllm">Twitter</a></li>
                            <li><a href="https://www.instagram.com/rgllm">Instagram</a></li>
                            <li><a href="mailto:r@rgllm.com">Email</a></li>
                        </ul>
                    </div>
            </div>
        );}

}

export default Header;