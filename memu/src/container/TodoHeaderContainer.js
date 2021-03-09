import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoFormView from '../view/TodoFormView';

@inject("TodoStore")
@observer
class TodoHeaderContainer extends Component {
    render() {
        const {todo, setTodoProp, addTodo} = this.props.TodoStore;
        return (
            <TodoFormView
                todo={todo}
                addTodo={addTodo}
                setTodoProp={setTodoProp}
            />
        );
    }
}

export default TodoHeaderContainer;