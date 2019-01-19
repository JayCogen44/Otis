import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContainer from './containers/MainContainer'
import './css/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
        }
    }

    toggleNav = () => {
        if (this.state.showNav === false) {
            this.setState({
                showNav: true,
            })
        } else {
            this.setState({
                showNav: false,
            })
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className={`main-nav  ${this.state.showNav === false ? "hide" : "show"}`}>
                            <span className='nav' onClick={this.toggleNav}>
                                <span className='top'></span>
                                <span className='mid'></span>
                                <span className='bot'></span>
                            </span>
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
                            render={props => <MainContainer toggleNav={this.toggleNav} content={'This is the about page'} />} />
                    </div>
                </Router>
            </div >
        )
    }
}

export default App;

