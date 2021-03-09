import React from 'react';
import { Button, Icon,  Segment, Grid, Checkbox } from 'semantic-ui-react';

function TodoItemView(props) {
    //style
    const defaultStlye = {
        color: "black"
    }
    const succesStyle = {
        color: "white",
        backgroundColor: "rgb(90 179 111)"
    }
    const {todo, changeTodoProp, removeTodo} = props;

    return (
        <Segment
            color={todo.checked ? "green" : "black"}
            style={todo.checked ? succesStyle : defaultStlye}
            tertiary={todo.checked ? true : false}
            inverted={todo.checked ? true : false}>
            <Grid verticalAlign='middle' columns={3}>
                <Grid.Column width={1}><Checkbox onChange={() => changeTodoProp(todo, "checked", !todo.checked)} /></Grid.Column>
                <Grid.Column width={13}>{todo.checked ? <del><h2>{todo.name}</h2></del> : <h2>{todo.name}</h2>}</Grid.Column>
                <Grid.Column width={2}>
                    <Button floated='right' inverted onClick={() => removeTodo(todo)}>
                        <Icon name="erase" color='red' />
                    </Button>
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

export default TodoItemView;