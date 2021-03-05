import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';

class Text extends Component {

    handleSubmit = (event) =>{
        alert('This action is running in Text Component!\nTextarea value is ["'+ this.props.text+'"]');
        event.preventDefault();
    }

    render() {
        return (
            <Form inverted onSubmit={this.handleSubmit}>
                <Form.Input
                label='Name:'
                value={this.props.text} 
                onChange={this.props.handleTextChange} />
                {/*<Form.Button type="submit" floated='right'>Submit</Form.Button>*/}
            </Form>
        );
    }
}

export default Text;