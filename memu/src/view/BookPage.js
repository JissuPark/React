import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Input, Grid } from "semantic-ui-react";
import BookContainer from "../container/BookContainer";
import BookListContainer from "../container/BookListContainer";

@inject("BookStore")
@observer
class BookPage extends Component {
    render() {
        const { setInput } = this.props.BookStore;
        console.log(setInput);
        return (
            <>
                <div className="App">
                    <h1>Book List</h1>
                    <Input fluid
                        placeholder="Seacrh..."
                        action={{ icon: 'search' }}
                        onChange={setInput}
                    />
                </div>
                <hr />
                <Grid columns={2}>
                    <Grid.Column>
                        <BookListContainer />
                    </Grid.Column>
                    <Grid.Column>
                        <BookContainer />
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default BookPage;