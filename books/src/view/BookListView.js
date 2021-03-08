import { Item } from 'semantic-ui-react'
import React from 'react';

function BookListView (props){

    const {book, select} = props;
    return (
            <Item onClick={()=>select(book)}>
                <Item.Image size='tiny' src={book.imgUrl} />
                
                <Item.Content>
                    <Item.Header as='a'>{book.title}</Item.Header>
                    <Item.Meta>{book.price}</Item.Meta>
                    <Item.Description>
                        {book.author}
                    </Item.Description>
                    
                </Item.Content>
            </Item>
    );

}

export default BookListView;