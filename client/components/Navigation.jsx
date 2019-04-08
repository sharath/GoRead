import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let logged_in = this.props.username != "";
        let left_bar = (logged_in) ?
            <React.Fragment>
                <Nav.Link as={Link} href="/shelf/" to="/shelf/">Bookshelf</Nav.Link>
            </React.Fragment> :
            <React.Fragment></React.Fragment>;

        let right_bar = (logged_in) ?
            <React.Fragment>
                <Nav.Link disabled>Logged in as {this.props.username}</Nav.Link>
                <Nav.Link as={Link} href="/settings/" to="/settings/">Settings</Nav.Link>
                <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
            </React.Fragment> :
            <React.Fragment>
                <Nav.Link as={Link} href="/login/" to="/login/">Login</Nav.Link>
                <Nav.Link as={Link} href="/register/" to="/register/">Register</Nav.Link>
            </React.Fragment>;

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand disabled>GoRead</Navbar.Brand>
                <Nav className="mr-auto">
                    {left_bar}
                </Nav>
                <Nav className="mr-right">
                    {right_bar}
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;