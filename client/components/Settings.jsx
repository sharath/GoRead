import React from 'react';
import { Container } from 'react-bootstrap';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container>
                Settings
            </Container>);
    }

}

export default Settings;