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
<<<<<<< HEAD
        console.log(this.props.docData);
=======
>>>>>>> c46affd63c7ecb24ba35557a3207e68c36704a37
        const nav = [];
        this.props.docData.forEach((e, i) => {
            nav.push(
                <div className={`dropdown ${i === this.state.showDropdown ? 'active' : ''}`}
                    onClick={() => this.setState({ showDropdown: i })}
                    key={i + Math.random()}
                >
                    <span className='collapsible'>{e.category}</span>
                    <div className="content">
<<<<<<< HEAD
                        <p id={i} onClick={this.props.updateContent}>{e.title}</p>
=======
                        <p>{e.title}</p>
>>>>>>> c46affd63c7ecb24ba35557a3207e68c36704a37
                    </div>
                </div>
            )
        });
<<<<<<< HEAD
=======

        return (
            <div className='DocNav'>

                {nav}
>>>>>>> c46affd63c7ecb24ba35557a3207e68c36704a37

        return (
            <div className='DocNav'>
                {nav}
            </div>
        )
    }
}

export default DocNav;