import { Divider, Segment} from 'semantic-ui-react';
import TodoBody from './component/TodoBody';
import TodoHeader from './component/TodoHeader';


function App() {
 
  return (
    <div className="App">
      <Segment basic textAlign='center'>
        <TodoHeader/>
        <Divider horizontal>List</Divider>
        <TodoBody/>
      </Segment>
    </div>
  );
}

export default App;
