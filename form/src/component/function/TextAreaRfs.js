import React from 'react';
import {Form} from "semantic-ui-react";

function TextAreaRfs(props) {
    function handleSubmit(event){
        alert(props.textarea);
        event.preventDefault();
    }
    return (
            <Form inverted onSubmit={handleSubmit}>
                <Form.TextArea
                    label='Introduce:'
                    value={props.textarea} 
                    onChange={props.handleTextarea} />
                {/*<Button type="submit" floated='right'>Submit</Button>*/}
            </Form>
    );
}

export default TextAreaRfs;