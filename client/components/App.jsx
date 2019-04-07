import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Login } from './Login.jsx';
import axios from 'axios';

function Index() {
    return <h2>Home</h2>;
}

function BookShelf() {
    return <h2>BookShelf</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: ''
        };
    }

    login(username, password) {
        this.setState({
            username: username
        });
    }

    logout() {
        this.setState({ username: '' });
    }

    render() {
        let logged_in = this.state.username != "";
        let routes = (logged_in) ?
            <React.Fragment>
                <Route path="/" exact component={Index} />
                <Route path="/shelf/" component={BookShelf} />
                <Route path="/users/" component={Users} />
                <Route path="/login/" component={Index} />
            </React.Fragment> :
            <React.Fragment>
                <Route path="/" exact component={Index} />
                <Route path="/shelf/" component={BookShelf} />
                <Route path="/users/" component={Users} />
                <Route path="/login/" component={() => <Login login={this.login.bind(this)} />} />
            </React.Fragment>;

        return (
            <Router>
                <Navigation username={this.state.username} logout={this.logout.bind(this)} />
                {routes}
            </Router >
        );
    }
}

export default App;