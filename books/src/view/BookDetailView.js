import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function BookDetailView(props) {
    const {book} = props;
    return (
        book?
        (<Card>
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
        )
        :
        (<Card>
            <Image src="book_images/not_found.png"></Image>
            <Card.Content>
                <Card.Header>Nothing matched.</Card.Header>
                <Card.Description>Check if some spell is missing.</Card.Description>
            </Card.Content>
        </Card>
        )
    );
}

export default BookDetailView;