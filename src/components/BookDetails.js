import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import { GET_BOOK } from '../queries/queries';



export class BookDetails extends Component {
    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by the author</p>
                    <ul className='author-books'>
                        {
                            book.author.books.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div>No Book Selected</div>
            )
        }
    }
    render() {
        return (
            <div id='book-details'>
                {this.displayBookDetails()}
            </div>
        )
    }
}

export default graphql(GET_BOOK, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);