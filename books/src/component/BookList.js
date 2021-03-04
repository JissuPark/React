import BookItem from './BookItem.js';
import React, { Component } from 'react';
import {Item} from 'semantic-ui-react';
class BookList extends Component {
    render() {
        const {books, select} = this.props;
        const itemlist = 
            books.map(book=>{
                return <BookItem key={book.ISBN} book={book} select={select}/>
        });
        return (
            <Item.Group divided>
                {itemlist}
            </Item.Group>
        );
    }
}

export default BookList;