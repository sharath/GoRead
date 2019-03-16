import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


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
    super();
  }

  render() {
    return (
      <div>
        The Login component goes here.
      </div>
    );
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    let navbar_login = (this.props.loggedin) ? <Nav.Link href="/" disabled>{'Logged in as ' + this.props.user}</Nav.Link> : <Nav.Link href="/" disabled>Login</Nav.Link>;

    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
      {navbar_login}
      </Nav>
    </Navbar>);
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'loggedin': true,
      'user': 'Sharath'
    }
  }

  render() {
    return (
      <Router>
        <Navigation user={this.state.user} loggedin={this.state.loggedin}/>
        <Route exact path="/" component={Login} />
        <Route path="/shelf" component={BookShelf} />
        <Route path="/reader" component={Reader} />
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
