import React from "react";
import "./Home.css";


class Home extends React.Component {
    render() {
        return (
                <main class="site-content">
                    <section class="intro-title screen-height header-compensated center-vertically">
                        <div class="section-inner fade-block">
                            <h1 class="big-title graphics-title">Hi! My name is <span class="rgllm">Rogério</span> and I live in <span class="braga">Braga</span>. Currently taking my MSc. at UMinho and building things at <a href="https://www.pixelmatters.com" class="company">Pixelmatters</a>. </h1>
                        </div>
                    </section>
                </main>
        );}

}

export default Home;