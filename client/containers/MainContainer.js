import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import DocContent from '../components/DocContent';
import DocNav from '../components/DocNav';
import * as actions from '../actions/actions';
import './../css/App.css';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <DocContent
                    docData={this.props.docData} />
                <DocNav docData={this.props.docData} />
            </div>
        )
    }
}

const mapStateToProps = ({ reducer }) => ({
    docData: reducer.docData
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

