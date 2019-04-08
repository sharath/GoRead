import React from 'react';
import { Container } from 'react-bootstrap';

export class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container>
                Reader
            </Container>);
    }

}

export default Reader;