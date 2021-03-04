import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";


function SelectRfs(props) {
    const [value, setValue] = useState('grapefruit');
    function handleChange(event,{value}){
        setValue({value}.value);
    }
    function handleSubmit(event){
        alert(value + ' is selected');
        event.preventDefault();
    }
    const options = [
        {key: "G", text: "Grapefruit", value: "grapefruit"},
        {key: "L", text: "Lime", value: "lime"},
        {key: "C", text: "Coconut", value: "coconut"},
        {key: "M", text: "Mango", value: "mango"},
    ]
    return (
        <Form inverted onSubmit={handleSubmit}>
                <Form.Select
                    //fluid
                    options={options}
                    value={value}
                    onChange={handleChange}
                    label="Pick your favorite flavor:"
                />
                <Form.Button type="submit" floated='right'>Submit</Form.Button>
        </Form>
    );
}

export default SelectRfs;