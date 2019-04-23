import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { Settings } from './Settings.jsx'
import { NoMatch } from './NoMatch.jsx';
import { BookShelf } from './BookShelf.jsx';
import { Reader } from './Reader.jsx';

import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: '',
            settings: {},
        };
    }

    login(username, password) {
        axios.post('/api/login', {
            username: username,
            password: password
        }).then(res => {
            if (res.data.message === 'authorized') {
                this.setState({
                    username: username,
                    settings: res.data.settings,
                });
            } else {
                console.log('Invalid Credentials');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    register(username, password) {
        axios.post('/api/register', {
            username: username,
            password: password
        }).then(res => {
            if (res.data.message === 'successful') {
                console.log("success")
                this.setState({
                    username: username
                });
            } else {
                console.log('Error');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    logout() {
        this.setState({ username: '', settings: {} });
    }

    update_settings(viewMode, fontSize) {
        this.setState({ settings: { "view-mode": viewMode, "font-size": fontSize } });
        axios.post(`/api/settings/${this.state.username}`, {
            'font-size': fontSize,
            'view-mode': viewMode,
        }).then(res => {
            if (res.data.message === 'success') {
                console.log('success')
            }
        })
    }

    render() {
        let logged_in = this.state.username != "";
        let routes = (logged_in) ?
            <Switch>
                <Route path="/" exact component={BookShelf} />
                <Route path="/shelf" component={BookShelf} />
                <Route path="/login" component={BookShelf} />
                <Route path="/register" component={BookShelf} />
                <Route path="/settings" component={() => <Settings update_settings={this.update_settings.bind(this)} username={this.state.username} settings={this.state.settings} />} />
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