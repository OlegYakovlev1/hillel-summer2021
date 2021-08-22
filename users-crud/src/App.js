import React from 'react';
import './App.css';

import Users from './containers/Users';

class App extends React.Component {
    render() {
        return (
            <>
                <header className="page-header">Users App</header>
                <Users />
            </>
        );
    }
}

export default App;
