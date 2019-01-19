import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
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

    handleLinkClick = (e) => {
        this.props.getDoc(e);
        this.toggleNav();
    }

    render() {
        return (
            <div>
                <div>
                    <nav className={`main-nav  ${this.state.showNav === false ? "hide" : "show"}`}>
                        <span className='nav' onClick={this.toggleNav}>
                            <span className='top'></span>
                            <span className='mid'></span>
                            <span className='bot'></span>
                        </span>
                        <span className='nav-title'>DOCS</span>
                        <ul>
                            <li id='react' onClick={this.handleLinkClick}>React<span className='link_underline' />
                            </li>
                        </ul>
                    </nav>
                    <MainContainer docData={this.props.docData} />
                </div>
            </div >
        )
    }
}


const mapStateToProps = ({ reducer }) => ({
    docData: reducer.docData
});

const mapDispatchToProps = dispatch => ({
    getDoc: (e) => dispatch(actions.getDoc(e.target.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

