import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit() {
        return () => this.props.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" placeholder="Username" onChange={e => this.handleChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.submit()}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
