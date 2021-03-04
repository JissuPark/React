import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }
    handleSubmit = (event) => {
        alert("Value is "+this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                    label='Essay:'
                    value={this.state.value} 
                    onChange={this.handleChange} />
                    <Button type="submit" floated='right'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Text;