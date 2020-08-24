import React, { Component } from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';



class App extends Component {
  json=[];
  async componentDidMount(){
    const res = await fetch('http://127.0.0.1:3000/api/books')
    this.json = await res.json();
  }
  render() {
    return (
      <div className="Bookstore-CMS">
      <div className="panel-bg">
        <BooksList books={this.json}/>
        <hr />
        <BooksForm />
      </div>
    </div>

    )
  }
}

export default App;