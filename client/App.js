import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContainer from './containers/MainContainer'
import './css/App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about/">About</Link>
                                </li>
                            </ul>
                        </nav>

                        <Route exact path="/"
                            render={props => <MainContainer content={'This is the home page'} />}
                        />
                        <Route path="/about"
                            render={props => <MainContainer content={'This is the about page'} />} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;

