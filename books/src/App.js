import Books from "./component/Books.js";
import BookList from "./component/BookList";
import BookDetail from "./component/BookDetail";
import { Grid, Input } from 'semantic-ui-react';
import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('BookStore')
@observer
class App extends Component {
  
  render() {
    const {setInput} = this.props.BookStore;
    console.log(setInput);
    return (
      <>
        <div className="App">
          <h1>Book List</h1>
          <Input fluid
            placeholder="Seacrh..."
            action={{ icon: 'search'}}
            onChange={setInput}
          />
        </div>
        <hr />
        <Grid columns={2}>
          <Grid.Column>
            <BookList/>
          </Grid.Column>
          <Grid.Column>
            <BookDetail/>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default App;

