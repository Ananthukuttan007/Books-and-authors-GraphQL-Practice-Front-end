import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books...</div>);
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name} <button onClick={(e) => {
                        this.setState({ selected: book.id })
                    }}>Details</button></li>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }
}

export default graphql(GET_BOOKS)(BookList);