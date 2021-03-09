import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Button, List, Segment } from 'semantic-ui-react';
import TodoItemView from '../view/TodoItemView';

@inject("TodoStore")
@observer
class TodoBodyContainer extends Component {
    
    render() {
        const {todos, clearTodo, removeTodo, changeTodoProp} = this.props.TodoStore;
        return (
            <div>
                <Segment basic>
                    <List>
                        {/* forEach로 index를 사용하려고 했는데 forEach는 반환하지 않아 component가 생성되지 않는다. 그리고 map을 사용해도 index를 사용할 수 있다.  */}
                        {todos.map((todo) => {
                            console.log(todo);
                            return (
                                <List.Item>
                                   <TodoItemView 
                                        todo={todo} 
                                        changeTodoProp={changeTodoProp}
                                        removeTodo={removeTodo}/> 
                                </List.Item>
                            );
                        })}
                    </List>
                </Segment>
                <Button color='red' onClick={clearTodo}>Clear All</Button>
            </div>
        );
    }
}

export default TodoBodyContainer;