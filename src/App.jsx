import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';

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
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>);
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    let navbar_login = (this.props.loggedin) ? <Nav.Link href="/" disabled>{'Logged in as ' + this.props.user}</Nav.Link> : <Nav.Link href="/">Login</Nav.Link>;

    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">GoRead</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/shelf">Book Shelf</Nav.Link>
        <Nav.Link href="/reader">Random Book</Nav.Link>
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
      'loggedin': false,
      'user': 'GoRead User'
    }
  }

  render() {
    return (
      <Router>
        <Navigation user={this.state.user} loggedin={this.state.loggedin}/>
        <Container>
        <Route exact path="/" component={ (this.state.loggedin) ? BookShelf : Login} />
        <Route path="/shelf" component={BookShelf} />
        <Route path="/reader" component={Reader} />
        </Container>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
