import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Reader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The Reader component goes here.
    </div>);
  }
}

class BookShelf extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The BookShelf component goes here.
    </div>);
  }
}

class Login extends React.Component {
  constructor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path  = 'bookshelf';
    this.props.history.push(path);
  }

  render() {
    
    return (
      <div>
        The Login component goes here.
        <h1>Login <br /> </h1>
        <span>Username: <input type="text" id="username" />  <br /> </span>
        <span>Password: <input type="password" id="password" /> <br /> </span>
        <button onClick={this.routeChange()} > Go </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/about" component={BookShelf} />
        <Route path="/topics" component={Reader} />
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
