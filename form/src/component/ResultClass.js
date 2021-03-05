import React, { Component } from 'react';
import { Container, Header, Segment, Divider, Card, Image } from 'semantic-ui-react';

class ResultClass extends Component {
    render() {
        const {textValue ,textAreaValue, selectValue, checkboxValue, numberValue} = this.props;
        return (
            <div>
                <Segment textAlign="center" size="huge">Hello React World!</Segment>
                <Container fluid>
                    <Header>Hi! {textValue}.</Header>
                    <p>
                        Welcome to the React World!<br/>
                        This is My first application using React, semantic UI, others.<br/>
                        <br/>
                        On the left side, <br/>
                        There are some functions that you can input your informations.<br/>
                        Test them by inserting, selecting, clicking as much as you want!<br/>
                        The results you made are immediately outputted below.<br/>
                        Thank you!
                    </p>
                    <Divider/>
                    <Card centered>
                        {checkboxValue?
                            (checkboxValue==="man"?
                                <Image src="man.png"/>:<Image src="woman.png"/>):
                            <Image src="unknown.png"/>
                        }
                        
                        <Card.Content>
                            <Card.Header>{textValue}</Card.Header>
                            <Card.Meta>
                                {numberValue} years<br/>
                                {selectValue}
                            </Card.Meta>
                            <Card.Description>{textAreaValue}</Card.Description>
                        </Card.Content>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ResultClass;