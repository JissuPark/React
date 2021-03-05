import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';

class MultiInput extends Component {
   
    handleSubmit = (event) => {
        alert('This action is running in Text Component!\ncheckbox value is ["'+ this.props.checkbox+'"]\nnumber value is ["'+this.props.number+'"]');
            event.preventDefault();
    }
    
    render() {
        return (
            <Form inverted onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Checkbox
                        radio
                        label="Man"
                        value="man"
                        checked={this.props.checkbox==='man'}
                        onChange={this.props.handleCheckboxChange} 
                    />
                    <Form.Checkbox
                        radio
                        label="Woman"
                        value="woman"
                        checked={this.props.checkbox==='woman'}
                        onChange={this.props.handleCheckboxChange} 
                    />
                </Form.Group>
                <Form.Input
                    label="Age:"
                    name="Age"
                    type="number"
                    value={this.props.number}
                    onChange={this.props.handleNumberChange} 
                />
                <Form.Button floated='right'>submit</Form.Button>
            </Form>
        );
    }
}

export default MultiInput;