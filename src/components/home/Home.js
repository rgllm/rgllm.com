import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import Typing from 'react-typing-animation';


class Home extends React.Component {
    constructor() {
      super();
    }

    render() {
        return (
            <div className="moving-letters">
                <Typing 
                    speed={100} 
                    cursorClassName={"cursor"}
                >
                    <span className="ml11">Rogério Moreira</span>
                    <br/>
                    <br/>
                    <Typing.Speed ms={50} />
                    <div class="container">
                    <ul>
                        <li><a href="http://blog.rgllm.com">Blog</a></li>
                        <li><a href="mailto:r@rgllm.com">Email</a></li>
                        <li><a href="https://twitter.com/rgllm">Twitter</a></li>
                        <li><a href="https://instagram.com/rgllm">Instagram</a></li>
                        <li><a href="https://github.com/rgllm">Github</a></li>
                        <li><a href="https://pt.linkedin.com/in/rgllm">LinkedIn</a></li>
                    </ul>
                    </div>
                </Typing>

            </div>
        );}

}

export default Home;