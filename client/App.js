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
                            <span className='nav-title'>DOCS</span>
                            <ul>
                                <li>
                                    <Link to="/react/" onClick={this.toggleNav}>React<span className='link_underline' /></Link>
                                </li>
                                <li>
                                    <Link to="/mongo/" onClick={this.toggleNav}>Mongo<span className='link_underline' /></Link>
                                </li>
                                <li>
                                    <Link to="/postgres/" onClick={this.toggleNav}>Postgres<span className='link_underline' /></Link>
                                </li>
                                <li>
                                    <Link to="/mongoose/" onClick={this.toggleNav}>Mongoose<span className='link_underline' /></Link>
                                </li>
                            </ul>
                        </nav>

                        <Route exact path="/"
                            render={props => <MainContainer content={'This is the HOME page'} />}
                        />
                        <Route path="/react"
                            render={props => <MainContainer content={'This is the REACT page'} />}
                        />
                        <Route path="/mongo"
                            render={props => <MainContainer content={'This is the MONGO page'} />}
                        />
                        <Route path="/postgres"
                            render={props => <MainContainer content={'This is the POSTGRES page'} />}
                        />
                        <Route path="/mongoose"
                            render={props => <MainContainer content={'This is the MONGOOSE page'} />}
                        />
                    </div>
                </Router>
            </div >
        )
    }
}

export default App;

