import React, { Component } from 'react';

class DocContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let changedContent;
        if (this.props.docData) {
            changedContent = <td dangerouslySetInnerHTML={{ __html: this.props.docData.content }} />
        } else {
            changedContent = (
                <div>
                    <h1>Say Hi to Otis</h1>
                    <p>Development Docs can suck.  We're here to help</p>
                </div>)
        }
        return (
            <div className='DocContent'>
                {changedContent}
            </div>
        )
    }
};

export default DocContent;
