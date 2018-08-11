import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/notfound/NotFound';
import Header from './components/header/Header';
import Cv from './components/cv/CV';

class Main extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact />
                        <Route path="/cv" component={Cv} exact />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

