import { Divider, Segment} from 'semantic-ui-react';
import TodoBodyContainer from './container/TodoBodyContainer';
import TodoHeaderContainer from './container/TodoHeaderContainer';


function App() {
 
  return (
    <div className="App">
      <Segment basic textAlign='center'>
        <TodoHeaderContainer/>
        <Divider horizontal>List</Divider>
        <TodoBodyContainer/>
      </Segment>
    </div>
  );
}

export default App;
