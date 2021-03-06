import React from 'react';
import { Form } from "semantic-ui-react";


function SelectRfs(props) {
    function handleSubmit(event){
        alert(props.select + ' is selected');
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
                    fluid
                    options={options}
                    value={props.select}
                    onChange={props.handleSelect}
                    label="Pick your favorite flavor:"
                    placeholder="Pick one!"
                />
                {/*<Form.Button type="submit" floated='right'>Submit</Form.Button>*/}
        </Form>
    );
}

export default SelectRfs;