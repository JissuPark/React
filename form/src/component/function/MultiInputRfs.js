import React from 'react';
import {Form} from 'semantic-ui-react';


function MultiInputRfs(props) {
    function handleSubmit(event){
        alert('This action is running in Text Component!\ncheckbox value is ["' + props.checkbox + '"]\nnumber value is ["' + this.props.number + '"]');
        event.preventDefault();
    }
    return (
        <Form inverted onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Checkbox
                        radio
                        label="Man"
                        value="man"
                        checked={props.checkbox === 'man'}
                        onChange={props.handleCheckbox}
                    />
                    <Form.Checkbox
                        radio
                        label="Woman"
                        value="woman"
                        checked={props.checkbox === 'woman'}
                        onChange={props.handleCheckbox}
                    />
                </Form.Group>
                <Form.Input
                    label="Age:"
                    name="Age"
                    type="number"
                    value={props.number}
                    onChange={props.handleNumber}
                />
            {/*<Form.Button >submit</Form.Button>*/}
        </Form>
    );
}

export default MultiInputRfs;