import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Change Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Font Size</Form.Label>
                        <Form.Control as="select">
                            <option>10</option>
                            <option>12</option>
                            <option>14</option>
                            <option>16</option>
                            <option>18</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>View Mode</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>Day</option>
                            <option>Night</option>
                            <option>Color</option>
                        </Form.Control>
                    </Form.Group>
                    <Button>Save Changes</Button>
                </Form>
            </Container>
        );
    }

}

export default Settings;