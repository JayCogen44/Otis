import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import MainContainer from "./containers/MainContainer";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./css/App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
            isLoggedIn: false,
        };
    }

    toggleNav = () => {
        if (this.state.showNav === false) {
            this.setState({
                showNav: true
            });
        } else {
            this.setState({
                showNav: false
            });
        }
    };

    handleLinkClick = e => {
        this.props.getDoc(e);
        this.toggleNav();
    };

    updateLogin = () => {
        console.log('hit')
        if (this.state.isLoggedIn === false) {
            this.setState({
                isLoggedIn: true
            });
        } else {
            this.setState({
                isLoggedIn: false
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn &&
                    <div>
                        <nav
                            className={`main-nav  ${
                                this.state.showNav === false ? "hide" : "show"
                                }`}
                        >
                            <span className="nav" onClick={this.toggleNav}>
                                <span className="top" />
                                <span className="mid" />
                                <span className="bot" />
                            </span>
                            <span className="nav-title">DOCS</span>
                            <ul>
                                <li id="react" onClick={this.handleLinkClick}>
                                    React
                        <span className="link_underline" />

                                </li>
                            </ul>
                        </nav>
                        <MainContainer docData={this.props.docData} />
                    </div>
                }
                {/* <Login /> */}
                <SignUp updateLogin={this.updateLogin} />
            </div>
        );
    }
}

const mapStateToProps = ({ reducer }) => ({
    docData: reducer.docData
});

const mapDispatchToProps = dispatch => ({
    getDoc: e => dispatch(actions.getDoc(e.target.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
