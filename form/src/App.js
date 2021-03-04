import Text from "./component/Text";
import TextArea from "./component/TextArea";
import Select from "./component/Select";
import MultiInput from "./component/MultiInput";
import MultiInputRfs from "./component/MultiInputRfs";
import TextRfs from "./component/TextRfs";
import SelectRfs from "./component/SelectRfs";
import TextAreaRfs from "./component/TextAreaRfs";
import {Tab, Grid, Segment} from 'semantic-ui-react';

function PanelClass(){
  return(
    <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><Text/></Segment>      
        <Segment><TextArea/></Segment>
        <Segment><Select/></Segment>  
        <Segment><MultiInput/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>alert</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}

function PanelFunction(){
  return (
    <Grid columns={2} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment inverted><TextRfs/></Segment>
          <Segment inverted><TextAreaRfs/></Segment>
          <Segment inverted><SelectRfs/></Segment>
          <Segment inverted><MultiInputRfs/></Segment>
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
