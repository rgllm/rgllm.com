import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";


class Home extends React.Component {
    constructor() {
      super();
    }

    render() {
        return (
                <main class="site-content">
                    <section class="intro-title screen-height header-compensated center-vertically">
                        <div class="section-inner fade-block">
                            <h1 class="big-title graphics-title">Hi! My name is <span class="rgllm">Rogério</span>, and I’m a software engineer living in <span class="braga">Braga</span>. Front-End Developer at <a href="https://www.pixelmatters.com" class="company">Pixelmatters.</a> and taking my MSc. at UMinho.</h1>
                        </div>
                    </section>
                </main>
        );}

}

export default Home;