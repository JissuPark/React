import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';


class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        }
    }

    handleChange = (event,{value}) => {
        this.setState({value})
    }
    handleSubmit = (event) => {
        alert("select value is "+this.state.value);
        event.preventDefault();
    }
    options = [
        {key: "G", text: "Grapefruit", value: "grapefruit"},
        {key: "L", text: "Lime", value: "lime"},
        {key: "C", text: "Coconut", value: "coconut"},
        {key: "M", text: "Mango", value: "mango"},
    ]
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                        <Form.Select 
                            fluid
                            options={this.options} 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label="Pick your favorite flavor:"
                        />
                        <Form.Button type="submit" floated='right'>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

export default Select;  