import React from "react";
import "./CV.css";
import { Document } from 'react-pdf';


class CV extends React.Component {
    onDocumentComplete = (pages) => {
        console.log("PDF");
      }

    render() {
        return (
                <main class="site-content">
                    <section class="intro-title screen-height header-compensated center-vertically">
                        <div class="section-inner fade-block">
                        <Document
                        file="./resume.pdf"
                        error="🤷‍♂️"
                        />
                        </div>
                    </section>
                </main>
        );}

}

export default CV;