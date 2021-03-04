import './App.css';
import { welcome, Localtime, Gogodan } from './jsx';


function App() {
  return (
    <>
      <div id='div1'>
        <Localtime />
      </div>
      <div>
        {welcome}
      </div>
      <h3>구구단 출력 (table)</h3>
      <div className='gogo'>
        <Gogodan />
      </div>
    </>
  );
}
setInterval(Localtime, 1000);
export default App;
