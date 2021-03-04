import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';


class BookDetail extends Component {
    render() {
        if (this.props.book){
            const { title, price, author, imgUrl, introduce } = this.props.book;
            return (
                <div>
                    <Card>
                        <Image src={imgUrl} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{title}</Card.Header>
                            <Card.Meta>
                                {price}
                            </Card.Meta>
                            <Card.Description>
                                {author}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {introduce}
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