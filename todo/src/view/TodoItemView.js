import { useState } from 'react';
import { Button, Icon, Segment, Grid, Checkbox, Modal, Input} from 'semantic-ui-react';

function TodoItemView(props) {
    //style
    const defaultStlye = {
        color: "black"
    }
    const succesStyle = {
        color: "white",
        backgroundColor: "rgb(90 179 111)"
    }
    const { todo, changeTodoProp, removeTodo} = props;
    const [editvalue, setEditValue] = useState(todo.name);
    const [modalopen, setModalOpen] = useState(false);
    const editTodo = () => {
        changeTodoProp(todo, "name", editvalue);
        setModalOpen(false);
    }
    return (
        <Segment
            color={todo.checked ? "green" : "black"}
            style={todo.checked ? succesStyle : defaultStlye}
            tertiary={todo.checked ? true : false}
            inverted={todo.checked ? true : false}>
            <Grid verticalAlign='middle' columns={4}>
                <Grid.Column width={1}><Checkbox onChange={() => changeTodoProp(todo, "checked", !todo.checked)} /></Grid.Column>
                <Grid.Column width={10}>{todo.checked ? <del><h2>{todo.name}</h2></del> : <h2>{todo.name}</h2>}</Grid.Column>
                <Grid.Column width={2}>
                    <Modal 
                        open={modalopen}
                        trigger={
                            <Button floated='right' inverted onClick={()=>setModalOpen(true)}>
                                <Icon name="edit" color='violet' />
                            </Button>}>
                        <Modal.Header>Edit what to do</Modal.Header>
                        <Modal.Content>
                            <Input fluid value={editvalue} onChange={(e)=>setEditValue(e.target.value)}/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color="green" onClick={editTodo}>Save</Button>
                            <Button color="red" onClick={()=>setModalOpen(false)}>Close</Button>
                        </Modal.Actions>
                    </Modal>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button floated='right' inverted onClick={() => removeTodo(todo)}>
                        <Icon name="window close" color='red' />
                    </Button>
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

export default TodoItemView;