import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {

        fetch('/dev-server/yo')
            .then((data) => data.json())
            .then((json) => console.log(json));
    }

    render() {
        return (
            <div>Hey guys this is working</div>
        )
    }
}

export default App;

