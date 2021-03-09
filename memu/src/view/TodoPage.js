import React from 'react';
import {Segment, Divider } from 'semantic-ui-react';
import TodoHeaderContainer  from '../container/TodoHeaderContainer';
import TodoBodyContainer from '../container/TodoBodyContainer';

function TodoPage(props) {
    return (
        <div>
            <Segment basic textAlign='center'>
                <TodoHeaderContainer />
                <Divider horizontal>List</Divider>
                <TodoBodyContainer />
            </Segment>
        </div>
    );
}

export default TodoPage;