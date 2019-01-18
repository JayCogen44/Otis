import React, { Component } from 'react';
import Header from './Header';
import DocContent from './DocContent';
import DocNav from './DocNav'
import './css/App.css';

class App extends Component {

    componentDidMount() {

        fetch('/dev-server/yo')
            .then((data) => data.json())
            .then((json) => console.log(json));
    }

    render() {
        return (
            <div className='App'>
                App is working.
                <Header />
                <DocContent />
                <DocNav />
            </div>
        )
    }
}

export default App;

