import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {Header, Input} from 'semantic-ui-react';

@inject("TodoStore")
@observer
class TodoHeader extends Component {
    render() {
        const {inputValue, setInputValue, addTodo} = this.props.TodoStore;
        return (
            <div>
                <Header size="huge">React To Do List</Header>
                <Input

                    size="huge"
                    value={inputValue}
                    action={{ icon: "add", onClick: addTodo }}
                    placeholder="What to do?"
                    onChange={(e, v) => setInputValue(v.value)}
                />
            </div>
        );
    }
}

export default TodoHeader;