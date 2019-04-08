import React from 'react';
import axios from 'axios';
import { Container, Media } from 'react-bootstrap';

export class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { books: [] }
    }

    componentDidMount() {
        axios.get(`/api/books`)
            .then(res => {
                this.setState({ books: res.data });
            })
    }
    
    render() {
        console.log(this.state);
        return (
            <Container>
                <ul className="list-unstyled">
                    {
                        this.state.books.map((book, idx) => {
                            return <React.Fragment key={idx}>
                                <hr />
                                <Media as="li">
                                    <img width={64} className="mr-3" src={book.cover} />
                                    <Media.Body>
                                        <h5>{book.title}</h5>
                                        <p>{book.description}</p>
                                    </Media.Body>
                                </Media>

                                <hr />
                            </React.Fragment>
                        })
                    }
                </ul>
            </Container>);
    }

}

export default BookShelf;