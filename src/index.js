import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/notfound/NotFound';

class Main extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact />
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

