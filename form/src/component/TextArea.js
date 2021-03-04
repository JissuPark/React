import React, { Component } from 'react';
import {Form, Button} from "semantic-ui-react";

class TextArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : ''
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    handleSubmit = (event) => {
        alert('textarea value is '+ this.state.value);
        event.preventDefault();        
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.TextArea
                    label="Essay:"
                    value={this.state.value} 
                    onChange={this.handleChange} />
                <Button type="submit" floated='right'>Submit</Button>
            </Form>
        );
    }
}

export default TextArea;