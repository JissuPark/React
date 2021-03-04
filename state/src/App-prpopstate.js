import React, { Component } from 'react';
import Counter from './component/Counter.js';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,

        }
    }

    onInc = () => {
        this.setState({
            count :  this.state.count + 1
        });
    }

    onDec = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <Counter 
                    count={this.state.count}
                    increase={this.onInc}
                    decrease={this.onDec}
                />
            </div>
        );
    }
}

export default App;