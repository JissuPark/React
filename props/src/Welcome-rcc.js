import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <h1>Hello, {this.props.name} by rcc </h1>
                <h1>Hello, {name} by rcc</h1>
            </div>
        );
    }
}

export default Welcome;