import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound';
import Header from './components/header/Header';

class Main extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact />
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

