import React,{useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count : {props.count}</h1>
            <button onClick={props.increase}>+</button>
            <button onClick={props.decrease}>-</button>
            <hr></hr>
            <h1>Local Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <hr></hr>
        </div>
    );
}

export default Counter;