import React from 'react';
import { Segment, Header, Divider, Card, Container, Image } from 'semantic-ui-react';


function ResultFunction(props) {
    return (
        <div>
            <Segment textAlign="center" size="huge">Hello React World!</Segment>
            <Container fluid>
                <Header>Hi! {props.textValue}.</Header>
                <p>
                    Welcome to the React World!<br />
                        This is My first application using React, semantic UI, others.<br />
                    <br />
                        On the left side, <br />
                        There are some functions that you can input your informations.<br />
                        Test them by inserting, selecting, clicking as much as you want!<br />
                        The results you made are immediately outputted below.<br />
                        Thank you!
                    </p>
                <Divider />
                <Card centered>
                    {props.checkboxValue ?
                        (props.checkboxValue === "man" ?
                            <Image src="man.png" /> : <Image src="woman.png" />) :
                        <Image src="unknown.png" />
                    }

                    <Card.Content>
                        <Card.Header>{props.textValue}</Card.Header>
                        <Card.Meta>
                            {props.numberValue} years<br />
                            {props.selectValue}
                        </Card.Meta>
                        <Card.Description>{props.textAreaValue}</Card.Description>
                    </Card.Content>
                </Card>
            </Container>
        </div>
    );
}

export default ResultFunction;