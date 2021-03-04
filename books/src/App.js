import Books from "./component/Books.js";
import BookList from "./component/BookList";
import BookDetail from "./component/BookDetail";
import { Grid, Input } from 'semantic-ui-react';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      book: Books[0],
      search: ''
    }
  }

  onSelect = (s) => {
    this.setState({
      book: s
    });
  }

  setInput = (e) => {
    const newBooks = Books.filter(abook => {
      return abook.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      books: newBooks,
      book: newBooks[0]
    });
  }

  settings = (nb) =>{
    this.setState({book:nb[0], books:nb});
  }

  
  render() {
    return (
      <>
        <div className="App">
          <h1>Book List</h1>
          <Input fluid
            placeholder="Seacrh..."
            action={{ icon: 'search'}}
            onChange={this.setInput}
          />
        </div>
        <hr />
        <Grid columns={2}>
          <Grid.Column>
            <BookList books={this.state.books} select={this.onSelect}></BookList>
          </Grid.Column>
          <Grid.Column>
            <BookDetail book={this.state.book}></BookDetail>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default App;

