import React from 'react';
import axios from 'axios';
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                                        <Link to={'/reader/'+book._id+'/'}>{book.title}</Link>
                                        <p>{book.description}</p>
                                    </Media.Body>
                                </Media>

                                <hr />
                            </React.Fragment>
                        })
                    }
                </ul>
            </Container>
        );
    }

}

export default BookShelf;