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
                            <h1 class="big-title graphics-title">About me</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit orci facilisis dis bibendum sapien magna congue sem vivamus enim nisl suspendisse ullamcorper cras auctor tortor curae praesent integer class purus quisque tristique ut neque luctus litora id nunc sed cum volutpat tincidunt vel ligula pulvinar ultrices sociosqu ornare pharetra porta habitant fames nam mauris ridiculus torquent venenatis nisi conubia iaculis dui habitasse lobortis diam maecenas feugiat leo tempor taciti tempus lectus a at donec eu montes mus egestas lacus ultricies platea malesuada lacinia aptent vitae fringilla commodo non primis eros placerat natoque curabitur senectus sagittis sodales duis interdum nullam est accumsan</p>
                            <br/>
                            <br/>
                            <Link to="/cv">My resume</Link>
                        </div>
                    </section>
            </main>
        );
    }

}

export default About;