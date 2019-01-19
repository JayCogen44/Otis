import React, { Component } from 'react';

class DocContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='DocContent'>
                <div>{this.props.greeting}, {this.props.content}</div>
                <button onClick={this.props.showGreeting}>Change Greeting</button>
            </div>
        )
    }
};

export default DocContent;
