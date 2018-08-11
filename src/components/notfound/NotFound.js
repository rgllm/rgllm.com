import React from "react";
import ReactDOM from "react-dom";
import "./NotFound.css";


class NotFound extends React.Component {
    constructor() {
      super();
    }

    render() {
      return( 
      <main class="site-content">
        <section class="intro-title screen-height header-compensated center-vertically">
            <div class="section-inner fade-block">
                <h1 class="big-title graphics-title">Nothing exists here, yet! 😉</h1>
            </div>
        </section>
    </main>
  );}

}

export default NotFound;