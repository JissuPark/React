import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

@inject("BookStore")
@observer
class BookDetail extends Component {
    render() {
        const { book } = this.props.BookStore;
        if (book){
            return (
                <div>
                    <Card>
                        <Image src={book.imgUrl} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{book.title}</Card.Header>
                            <Card.Meta>
                                {book.price}
                            </Card.Meta>
                            <Card.Description>
                                {book.author}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {book.introduce}
                        </Card.Content>
                    </Card>
                </div>
            );
        }else{
            return (
                <Card>
                    <Image src="book_images/not_found.png"></Image>
                    <Card.Content>
                        <Card.Header>Nothing matched.</Card.Header>
                        <Card.Description>Check if some spell is missing.</Card.Description>
                    </Card.Content>
                </Card>);
        }
    }
}

export default BookDetail;