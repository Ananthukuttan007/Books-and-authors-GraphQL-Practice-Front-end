import React, { Component } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';



class App extends Component {

  render() {
    return (
      <div id='main'>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
