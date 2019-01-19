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

    componentDidMount() {

        fetch('/dev-server/yo')
            .then((data) => data.json())
            .then((json) => console.log(json));
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <DocContent
                    showGreeting={this.props.showGreeting}
                    greeting={this.props.greeting}
                    content={this.props.content} />
                <DocNav />
            </div>
        )
    }
}

const mapStateToProps = ({ reducer }) => ({
    greeting: reducer.data,
});

const mapDispatchToProps = dispatch => ({
    showGreeting: () => dispatch(actions.showGreeting('Now we know redux'))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

