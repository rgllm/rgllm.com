import React from "react";
import "./Home.css";


class Home extends React.Component {
    render() {
        return (
                <main class="site-content">
                    <section class="intro-title screen-height header-compensated center-vertically">
                        <div class="section-inner fade-block">
                            <h2 class="big-title graphics-title">Hi! My name is <span class="rgllm">Rogério</span> and I live in <span class="braga">Braga</span>. I do Front-End development at <a href="http://www.pixelmatters.com" class="company">Pixelmatters</a>. </h2>
                        </div>
                    </section>
                </main>
        );}

}

export default Home;