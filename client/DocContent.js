import React, { Component } from 'react';
// import './css/DocContent.css';

class DocContent extends Component {


    render() {
        return (
            <div className='DocContent'>{this.props.content}</div>
        )
    }
};

export default DocContent;
