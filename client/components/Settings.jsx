import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            "view-mode": this.props.settings['view-mode'],
            "font-size": this.props.settings['font-size'],
        };
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit() {
        return () => this.props.update_settings(this.state['view-mode'], this.state['font-size']);
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Font Size</Form.Label>
                        <Form.Control as="select" name="font-size" onChange={e => this.handleChange(e)} defaultValue={this.state['font-size']}>
                            <option>10</option>
                            <option>12</option>
                            <option>14</option>
                            <option>16</option>
                            <option>18</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>View Mode</Form.Label>
                        <Form.Control as="select" name="view-mode" onChange={e => this.handleChange(e)} defaultValue={this.state['view-mode']}>
                            <option>Day</option>
                            <option>Night</option>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={this.submit()}>Save Changes</Button>
                </Form>
            </Container>
        );
    }

}

export default Settings;
