import Counter from './component/Counter.js';

let count = 0;
function onInc(){
  count = count + 1;
  console.log(count);
}
function onDec(){
  count = count - 1;
  console.log(count);
}
function App() {
  return (
    <>
      <Counter cnt={count} increase={onInc} decrease={onDec}></Counter>
    </>
  );
}

export default App;
