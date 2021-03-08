import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Button, Icon,  Segment, Grid, Checkbox } from 'semantic-ui-react';


@inject("TodoStore")
@observer
class TodoItem extends Component {
    //style
    defaultStlye = {
        color: "black"
    }
    succesStyle = {
        color: "white",
        backgroundColor: "rgb(90 179 111)"
    }
    render() {
        const {checked, changeCheck, removeTodo} = this.props.TodoStore;
        const {todo, i} = this.props;
        return (
            <Segment
                color={checked[i] ? "green" : "black"}
                style={checked[i] ? this.succesStyle : this.defaultStlye}
                tertiary={checked[i] ? true : false}
                inverted={checked[i] ? true : false}>
                <Grid verticalAlign='middle' columns={3}>
                    <Grid.Column width={1}><Checkbox onChange={() => changeCheck(i)} /></Grid.Column>
                    <Grid.Column width={13}>{checked[i] ? <del><h2>{todo}</h2></del> : <h2>{todo}</h2>}</Grid.Column>
                    <Grid.Column width={2}>
                        <Button floated='right' inverted onClick={() => removeTodo(i)}>
                            <Icon name="erase" color='red' />
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default TodoItem;