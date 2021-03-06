import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';


class Select extends Component {

    options = [
        {key: "G", text: "Grapefruit", value: "grapefruit"},
        {key: "L", text: "Lime", value: "lime"},
        {key: "C", text: "Coconut", value: "coconut"},
        {key: "M", text: "Mango", value: "mango"},
    ]

    handleSubmit = (event) => {
        alert('This action is running in Text Component!\nselect value is ["'+ this.props.select+'"]');
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Select 
                        fluid
                        options={this.options} 
                        value={this.props.select} 
                        //onChange={(e,v)=>this.props.handelSelectChange(e,v)}
                        onChange={this.props.handleSelectChange}
                        label="Pick your favorite flavor:"
                        placeholder="Pick one!"
                    />
                    {/*<Form.Button type="submit" floated='right'>Submit</Form.Button>*/}
                </Form>
            </div>
        );
    }
}

export default Select;  