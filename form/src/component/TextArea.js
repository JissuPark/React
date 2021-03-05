import React, { Component } from 'react';
import {Form} from "semantic-ui-react";

class TextArea extends Component {
    
    handleSubmit = (event) => {
        alert('This action is running in Text Component!\nTextarea value is ["'+ this.props.textArea+'"]');
        event.preventDefault();        
    }

    render() {
        return (
            <Form inverted onSubmit={this.handleSubmit}>
                <Form.TextArea
                    label="Introduce:"
                    value={this.props.textArea} 
                    onChange={this.props.handleTextChange} />
                <Form.Button type="submit" floated='right'>Submit</Form.Button>
            </Form>
        );
    }
}

export default TextArea;