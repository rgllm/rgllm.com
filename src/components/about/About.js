import React from "react";
import ReactDOM from "react-dom";
import "./About.css";
import { Link } from 'react-router-dom';


class About extends React.Component {
    constructor() {
      super();
    }

    render() {
        return(
            <main class="site-content">
                    <section class="intro-title screen-height header-compensated center-vertically">
                        <div class="section-inner fade-block">
                            <Link to="/cv"><h1 class="big-title graphics-title">About me</h1></Link>
                            <p>🕶</p>
                        </div>
                    </section>
            </main>
        );
    }

}

export default About;