import React, { useState } from 'react';
import {Form} from 'semantic-ui-react';


function MultiInputRfs(props) {
    const [isGoing, setIsGoing] = useState(false);
    const [numberOfGuests, setNOG] = useState(0);

    function handleCheckbox(event){
        setIsGoing(!isGoing);
    }
    function handleNumber(event){
        setNOG(event.target.value);
    }
    function handleSubmit(event){
        let msg = '';
        isGoing === true ? msg = "going on" : msg = "stopped"
        msg += "\nNumber of Guests : "+numberOfGuests;
        alert(msg);
        event.preventDefault();
    }
    return (
        <Form inverted onSubmit={handleSubmit}>
                <label>Is Going On? </label>
                <Form.Checkbox
                    name="isGoing"
                    checked={isGoing}
                    onChange={handleCheckbox}
                />
        
                <Form.Input
                    label="Number of guests:"
                    name="numberOfGuests"
                    type="number"
                    value={numberOfGuests}
                    onChange={handleNumber}
                />
            <Form.Button >submit</Form.Button>
        </Form>
    );
}

export default MultiInputRfs;