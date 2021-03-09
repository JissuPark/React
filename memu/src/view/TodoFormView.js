import React from 'react';
import {Header, Input} from 'semantic-ui-react';


function TodoFormView(props) {
    return (
        <div>
            <Header size="huge">React To Do List</Header>
            <Input
                size="huge"
                value={props.todo.name}
                action={{ icon: "add", onClick: props.addTodo }}
                placeholder="What to do?"
                onChange={(e) => props.setTodoProp("name", e.target.value)}
            />
        </div>
    );
}

export default TodoFormView;