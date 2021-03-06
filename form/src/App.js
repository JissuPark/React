import PanelClass from './component/class/PanelClass';
import PanelFunction from './component/function/PanelFunction';
import {Tab} from 'semantic-ui-react';


function App() {
  const panes = [
    { menuItem: 'Class', render: () => <Tab.Pane><PanelClass/></Tab.Pane> },
    { menuItem: 'Function', render: () => <Tab.Pane><PanelFunction/></Tab.Pane> },
  ]
  return (
    <Tab panes={panes}/>
  );
}

export default App;
