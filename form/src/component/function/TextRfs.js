import React from 'react';
import {Form} from 'semantic-ui-react';

function TextRfs(props) {
    function handleSubmit(event){
        alert("text value is "+props.text);
        event.preventDefault();
    }
    return (
        <div>
            <Form inverted onSubmit={handleSubmit}>
                <Form.Input
                    label="Name:"
                    value={props.text} 
                    onChange={props.handleText} />
                {/*<Button type="submit" floated='right'>Submit</Button>*/}
            </Form>
        </div>
    );
}

export default TextRfs;