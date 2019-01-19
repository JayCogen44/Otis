import React, { Component } from 'react';
// import './css/Header.css';


class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='Header'>
            <button onClick={this.props.toggleNav}>Header is working.</button>
            </div>
        )
    }
};


export default Header;