import Counter from './component/Counter.js';
import Result from './component/Result.js';
import Clock from './component/Clock.js';
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Clock date={new Date()}/>
      <Counter 
        count={count}
        increase={()=>setCount(count+1)}
        decrease={()=>setCount(count-1)}
      />
      <Result count={count}/>
    </div>
  );
}

export default App;
