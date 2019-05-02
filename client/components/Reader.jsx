import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    componentDidMount() {
        axios.get('/api/books/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
            })
}

    render() {
        return (
            <Container>
                {this.state.text}
            </Container>
        );
    }

}

export default Reader;
