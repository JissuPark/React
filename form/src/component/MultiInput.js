import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';

class MultiInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 0
        }
    }

    handleCheckbox = (event) => {
        this.setState({isGoing: !this.state.isGoing});
    }

    handleNumber = (event) => {
        this.setState({numberOfGuests: event.target.value});
    }

    handleSubmit = (event) => {
        alert("is going ? "+this.state.isGoing+'\n'+
            "number of guests : " + this.state.numberOfGuests);
            event.preventDefault();
    }
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                    <label>Is Going On?</label> 
                    <Form.Checkbox
                        name="isGoing"
                        checked={this.state.isGoing}
                        onChange={this.handleCheckbox} 
                    />
                    <Form.Input
                        label="Number of guests:"
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleNumber} 
                    />
                <Form.Button>submit</Form.Button>
            </Form>
        );
    }
}

export default MultiInput;