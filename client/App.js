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
      showNav: false
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

  render() {
    return (
      <div>
        {/* <div>
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
              <li>
                <button id="react" onClick={this.handleLinkClick}>
                  React
                  <span className="link_underline" />
                </button>
              </li>
              <li>
                <button id="postres" onClick={this.handleLinkClick}>
                  Postgres
                  <span className="link_underline" />
                </button>
              </li>
            </ul>
          </nav>
          <MainContainer docData={this.props.docData} />
        </div> */}
        {/* <Login /> */}
        <SignUp />
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
