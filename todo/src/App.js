import { useState } from 'react';
import { Button, Divider, Header, Icon, Input, List, Segment, Grid, Checkbox } from 'semantic-ui-react';

function App() {
  //state
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  const [id, setId] = useState(0);
  //function
  const addTodo = () => {
    //배열을 state 사용하려다 보니 set~~을 통해서 state를 변경하지 않으면 update가 되지 않는 현상이 있다. 
    //=> 아직 모르겠음. 일단 생성은 뒤에 덧붙여서 다시 설정해주는 방식 이용
    //삭제는 ...operator를 이용해 해당 index를 제외한 앞뒤를 잘라 붙이는 방식 이용
    /* 
    -이전 코드 -
    todos.push(inputValue);
    checked.push(false);
    */
    setTodos(todos => todos.concat(inputValue));
    setChecked(checked => checked.concat(false));
    setInputValue('');
    setId(id+1);
  }
  const clearTodo = () => {
    setTodos([]);
    setChecked([]);
    setId(0);
  }
  const removeTodo = (idx) => {
    setTodos(todos.filter((t,i) => i !== idx));
    setChecked(checked.filter((t,i) => i !== idx))
    console.log(idx);
  }
  const changeCheck = idx => {
    const newChecked = checked.map((c,i) => i === idx ? !c : c);
    setChecked(newChecked);
  }
  //style
  const defaultStlye = {
    color: "black"
  }
  const succesStyle = {
    color: "white",
    backgroundColor: "rgb(90 179 111)"
  }
 
  return (
    <div className="App">
      <Segment basic textAlign='center'>
        <Header size="huge">React To Do List</Header>
        <Input

          size="huge"
          value={inputValue}
          action={{ icon: "add", onClick: addTodo }}
          placeholder="What to do?"
          onChange={(e, v) => setInputValue(v.value)}
        />
        <Divider horizontal>List</Divider>
        <Segment basic>
          <List>
            {/* forEach로 index를 사용하려고 했는데 forEach는 반환하지 않아 component가 생성되지 않는다. 그리고 map을 사용해도 index를 사용할 수 있다.  */}
            {todos.map((todo,i) => {
              return (
                <List.Item>
                  <Segment 
                    color={checked[i]?"green":"black"}
                    style={checked[i]?succesStyle:defaultStlye}
                    tertiary={checked[i]?true:false}
                    inverted={checked[i]?true:false}>
                    <Grid verticalAlign='middle' columns={3}>
                      <Grid.Column width={1}><Checkbox onChange={()=>changeCheck(i)}/></Grid.Column>
                      <Grid.Column width={13}>{checked[i]?<del><h2>{todo}</h2></del>:<h2>{todo}</h2>}</Grid.Column>
                      <Grid.Column width={2}>
                        <Button floated='right' inverted onClick={()=>removeTodo(i)}>
                          <Icon name="erase"  color='red'/>
                        </Button>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </List.Item>
              );
            })}
          </List>
        </Segment>
        <Button color='red' onClick={clearTodo}>Clear All</Button>
      </Segment>
    </div>
  );
}

export default App;
