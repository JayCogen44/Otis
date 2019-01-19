import React, { Component } from 'react';

const Nav = (props) => (
    <nav className={`main-nav  ${props.showNav === false ? "hide" : "show"}`}>
        <span className='nav' onClick={this.toggleNav}>
            <span className='top'></span>
            <span className='mid'></span>
            <span className='bot'></span>
        </span>
        <span className='nav-title'>DOCS</span>
        <ul>
            <li>
                <Link id='react' to="/react/"
                    onClick={this.handleLinkClick}
                >React<span className='link_underline' /></Link>
            </li>
            <li>
                <Link id='mongo' to="/mongo/"
                    onClick={this.handleLinkClick}
                >Mongo<span className='link_underline' /></Link>
            </li>
            <li>
                <Link id='postgres' to="/postgres/"
                    onClick={this.handleLinkClick}
                >Postgres<span className='link_underline' /></Link>
            </li>
            <li>
                <Link id='mongoose' to="/mongoose/"
                    onClick={this.handleLinkClick}
                >Mongoose<span className='link_underline' /></Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
