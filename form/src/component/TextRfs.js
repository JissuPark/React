import React, { useState } from 'react';
import {Form, Button} from 'semantic-ui-react';

function TextRfs(props) {
    const [value, setValue] = useState('');

    function handleChange(event){
        setValue(event.target.value);
        console.log(event.target.value);
    }
    
    function handleSubmit(event){
        alert("text value is "+value);
        event.preventDefault();
    }
    return (
        <div>
            <Form inverted onSubmit={handleSubmit}>
                <Form.Input
                    label="Essay:"
                    value={value} 
                    onChange={handleChange} />
                <Button type="submit" floated='right'>Submit</Button>
            </Form>
        </div>
    );
}

export default TextRfs;