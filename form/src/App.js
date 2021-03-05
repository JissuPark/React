import PanelClass from './component/PanelClass';
import MultiInputRfs from "./component/MultiInputRfs";
import TextRfs from "./component/TextRfs";
import SelectRfs from "./component/SelectRfs";
import TextAreaRfs from "./component/TextAreaRfs";
import {Tab, Grid, Segment} from 'semantic-ui-react';

function PanelFunction(){
  return(
    <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment inverted color='teal'><TextRfs/></Segment>      
        <Segment inverted color='teal'><TextAreaRfs/></Segment>
        <Segment inverted color='teal'><SelectRfs/></Segment>  
        <Segment inverted color='teal'><MultiInputRfs/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>alert</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}



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
