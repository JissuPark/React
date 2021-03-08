import BookListView from '../view/BookListView.js';
import React, { Component } from 'react';
import {Item} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject("BookStore")
@observer
class BookListContainer extends Component {
    render() {
        const {books, select} = this.props.BookStore;
        console.log(books);
        return (
            <Item.Group divided>
                {books.map(item=>{
                    return <BookListView key={item.ISBN} book={item} select={select}/>})}
            </Item.Group>
        );
    }
}

export default BookListContainer;