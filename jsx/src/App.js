import React, { Component } from 'react';

class App extends Component {
  // 4
  classformat(user){
    return user.firstname + " " + user.lastname
  }

  render() {
    // 1
    const name = "gr00t";
    const type = "class";
    // 2
    const user = {
      firstname : "jisu",
      lastname : "Park"
    }
    function formatName(user){
      return user.firstname + '  ' + user.lastname;
    }
    // 3
    const myStyle = {
      backgroundColor : 'aqua',
      color : 'darkgrey',
      fontSize : '50px',
      padding : '5px',
      fontWeight : 'bold'
    }
    return (
      <div>
        {/* JSX 문법 */}
        <h1> Hello {name} <small>(by {type})</small></h1>
        <h1> Hello {formatName(user)} <small>(by function)</small></h1>
        <span style={myStyle}>Hello react</span>
        <h1> Hello {this.classformat(user)} <small>(by classfunction)</small></h1>
      </div>
    );
  }
}

export default App;