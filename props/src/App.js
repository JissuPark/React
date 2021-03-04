//import Welcome from './Welcome-rcc';
//import Welcome from './Welcome-rsc';
import Welcome from './Welcome-rfs';
function App() {
  const myStyle = {
    backgroundColor : 'yellow',
    color : 'black',
    fontSize : '50px',
    padding : '5px',
    fontWeight : 'bold'
  }
  return (
    <div className="App">
      <Welcome name="react"/>
      <Welcome name="component"/>
      <Welcome name="props"/>
      <Welcome name="welcome" style={myStyle}>something</Welcome>
    </div>
  );
}

export default App;
