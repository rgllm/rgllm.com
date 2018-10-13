import React from "react";
import "./About.css";


class About extends React.Component {
    render() {
        return(
            <main className="site-content">
                    <section className="intro-title screen-height header-compensated center-vertically">
                        <div className="section-inner fade-block">

                            <section>
                                <h2>About</h2>
                                <p>I am a MSc student at University of Minho. I write about Apple and tech at <a href="https://iclub.pt">iClub</a>.</p>
                            </section>

                            <section>
                                <h2>Education</h2>
                                <dl className="timeline">
                                    <div className="timeline-item">
                                        <dt><time>Sep 2017 - present</time></dt>
                                        <dd>MSc in <a href="http://miei.di.uminho.pt/">Software Engineering</a> (Artificial Intelligence and Software Systems) at the <a href="http://www.uminho.pt/">University of Minho</a></dd>
                                    </div>
            
                                    <div className="timeline-item">
                                        <dt><time>Sep 2014 - Jul 2017</time></dt>
                                        <dd>BSc in <a href="http://miei.di.uminho.pt/">Software Engineering</a> at the <a href="http://www.uminho.pt/">University of Minho</a></dd>
                                    </div>
            
                                </dl>
                            </section>

                            <section>
                                <h2>Talks and Wordkshops</h2>
                                <p>I also do some speaking work and workshops about tech stuff.</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/events/429278770844403/">WordPress workshop for NEEGIUM</a>. Slides <a href="/wpslides.pdf">here</a>.</li>
                                </ul>
                            </section>

                            <section>
                            <h2>Work</h2>
                            <dl className="timeline">
                                <div className="timeline-item">
                                    <dt><time>Fev 2014 - present</time></dt>
                                    <dd>
                                    <h3 className="timeline-title">Host <a href="https://www.meetup.com/Meetup-WordPress-de-Braga/">Meetup WordPress de Braga</a></h3>
                                        <p>Monthly meetup of the WordPress community in Braga.</p>
                                    </dd>
                                </div>
                            </dl>
                        </section>

                        <section>
                            <h2>Hackathons</h2>
                            <p>I like to build things. Hackathons are the perfect opportunity to build things in 24 or 48 hours while stressed, sleep deprived and lots of caffeine.</p>
                            <ul>
                                <li><a href="https://github.com/rgllm/helpum">HelpUM</a> at <a href="https://hacktivate.io/">Hacktivate</a> in <time>Feb 2018</time></li>
                            </ul>
                        </section>

                        </div>
                    </section>
            </main>
        )
    }

}

export default About;