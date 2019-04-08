import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { Settings } from './Settings.jsx'
import { NoMatch } from './NoMatch.jsx';
import { BookShelf } from './BookShelf.jsx';
import { Reader } from './Reader.jsx';

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
        this
    }

    register(username, password) {
        console.log(username, password);
    }

    logout() {
        this.setState({ username: '' });
    }

    render() {
        let logged_in = this.state.username != "";
        let routes = (logged_in) ?
            <Switch>
                <Route path="/" exact component={BookShelf} />
                <Route path="/shelf" component={BookShelf} />
                <Route path="/login" component={BookShelf} />
                <Route path="/settings" component={Settings} />
                <Route path="/reader/:id" component={Reader} />
                <Route component={NoMatch} />
            </Switch> :
            <Switch>
                <Route path="/register" exact component={() => <Register register={this.register.bind(this)} />} />
                <Route component={() => <Login login={this.login.bind(this)} />} />
            </Switch>;

        return (
            <HashRouter basename="/">
                <Navigation username={this.state.username} logout={this.logout.bind(this)} />
                {routes}
            </HashRouter>
        );
    }
}

export default App;