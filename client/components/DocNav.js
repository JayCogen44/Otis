import React, { Component } from 'react';
// import './css/DocNav.css';

class DocNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: 0
        }
    }

    render() {
        const nav = [];
        this.props.docData.forEach((e, i) => {
            nav.push(
                <div className={`dropdown ${i === this.state.showDropdown ? 'active' : ''}`}
                    onClick={() => this.setState({ showDropdown: i })}
                    key={i + Math.random()}
                >
                    <span className='collapsible'>{e.category}</span>
                    <div className="content">
                        <p>{e.title}</p>
                    </div>
                </div>
            )
        });

        return (
            <div className='DocNav'>

                {nav}

            </div>
        )
    }
}

export default DocNav;