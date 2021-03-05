import React,{ Component } from "react";
import {Grid, Segment} from "semantic-ui-react";
import Text from "./Text";
import TextArea from "./TextArea";
import Select from "./Select";
import MultiInput from "./MultiInput";
import ResultClass from "./ResultClass";

class PanelClass extends Component{
    constructor(props){
      super(props);
      this.state={
        textValue: '',
        textAreaValue: '',
        selectValue: '',
        checkboxValue: false,
        numberValue: 0
      }
    }
  
    textChange  = (event) => {
      this.setState({textValue: event.target.value});
    }
  
    textAreaChange = (event) => {
      this.setState({textAreaValue: event.target.value});
    }
  
    selectChange = (event,{value}) => {
      this.setState({selectValue: {value}.value})
    }

    checkboxChange = (event, {value}) => {
        this.setState({checkboxValue: {value}.value});
        console.log(this.state.checkboxValue);
    }

    numberChange = (event) => {
        this.setState({numberValue: event.target.value});
    }

    
    render(){
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment inverted>
                <Text 
                    text={this.state.textValue}
                    handleTextChange={this.textChange}
                />
              </Segment>
            <Segment inverted>
                <TextArea
                    textArea={this.state.textAreaValue}
                    handleTextChange={this.textAreaChange}
                />
            </Segment>
            <Segment inverted>
                <Select
                    select={this.state.selectValue}
                    handleSelectChange={this.selectChange}
                />
            </Segment>
            <Segment inverted>
                <MultiInput
                    checkbox={this.state.checkboxValue}
                    number={this.state.numberValue}
                    handleCheckboxChange={this.checkboxChange}
                    handleNumberChange={this.numberChange}
                />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <ResultClass 
                    textValue={this.state.textValue}
                    textAreaValue={this.state.textAreaValue}
                    selectValue={this.state.selectValue}
                    checkboxValue={this.state.checkboxValue}
                    numberValue={this.state.numberValue}
                />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
    }
  }
  export default PanelClass;