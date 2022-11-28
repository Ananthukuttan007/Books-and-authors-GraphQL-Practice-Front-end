import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      genre
      authorid
    }
  }
`;
const GET_BOOK = gql`
  query($id:ID) {
    book(id:$id) {
      id
      name
      genre
      author{
        id
        name
        books{
          name
        }
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
    }
  }
`;

const ADD_BOOKS = gql`
mutation AddBook($name: String!, $genre: String!, $authorid: ID!){
  addBook(name: $name, genre: $genre, authorid: $authorid){
      name
      id
  }
}
`;


export { GET_AUTHORS, GET_BOOKS, ADD_BOOKS, GET_BOOK };