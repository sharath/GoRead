import React from 'react';
import { Container } from 'react-bootstrap';

export class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container>
                BookShelf
            </Container>);
    }

}

export default BookShelf;