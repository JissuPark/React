import React, { useState } from 'react';
import MultiInputRfs from "./MultiInputRfs";
import TextRfs from "./TextRfs";
import SelectRfs from "./SelectRfs";
import TextAreaRfs from "./TextAreaRfs";
import ResultFunction from "./ResultFunction";
import { Grid, Segment } from 'semantic-ui-react';


function PanelFunction() {
    //state
    const [textValue, setText] = useState('');
    const [textareaValue, setTextarea] = useState('');
    const [selectValue, setSelect] = useState('');
    const [checkValue, setCheckbox] = useState(false);
    const [numValue, setNumber] = useState(0);

    //function
    function handleTextChange(event) {
        setText(event.target.value);
    }
    function handleTextareaChange(event) {
        setTextarea(event.target.value);
    }
    function handleSelectChange(event, { value }) {
        setSelect({ value }.value);
    }
    function handleCheckboxChange(event, {value}) {
        setCheckbox({value}.value);
    }
    function handleNumberChange(event) {
        setNumber(event.target.value);
    }

    return (
        <Grid columns={2} divided>
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment inverted color='teal'>
                        <TextRfs
                            text={textValue}
                            handleText={handleTextChange} />
                    </Segment>
                    <Segment inverted color='teal'>
                        <TextAreaRfs
                            textarea={textareaValue}
                            handleTextarea={handleTextareaChange} />
                    </Segment>
                    <Segment inverted color='teal'>
                        <SelectRfs
                            select={selectValue}
                            handleSelect={handleSelectChange} />
                    </Segment>
                    <Segment inverted color='teal'>
                        <MultiInputRfs
                            checkbox={checkValue}
                            number={numValue}
                            handleCheckbox={handleCheckboxChange}
                            handleNumber={handleNumberChange} />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <ResultFunction
                            textValue={textValue}
                            textAreaValue={textareaValue}
                            selectValue={selectValue}
                            checkboxValue={checkValue}
                            numberValue={numValue} />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default PanelFunction;