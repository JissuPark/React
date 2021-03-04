import React, { useState } from 'react';
import {Form, Button} from "semantic-ui-react";

function TextAreaRfs(props) {
    const [value, setValue] = useState('');
    function handleChange(event){
        setValue(event.target.value);
        console.log(event.target.value);
    }
    function handleSubmit(event){
        alert(value);
        event.preventDefault();
    }
    return (
            <Form inverted onSubmit={handleSubmit}>
                <Form.TextArea
                    label='Essay:'
                    value={value} 
                    onChange={handleChange} />
                <Button type="submit" floated='right'>Submit</Button>
            </Form>
    );
}

export default TextAreaRfs;