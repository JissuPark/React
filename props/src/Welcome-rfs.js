import React from 'react';
import PropTypes from 'prop-types'
function Welcome(props) {
    return (
        <div>
            <h1 style={props.style}>Hello, {props.name} {props.children} by rfs</h1>
        </div>
    );
}

Welcome.defaultProps = {
    children : '',
    style:{
        backgroundColor : 'white',
        color : 'blue',
        fontSize : '30px',
        padding : '3px',
        fontWeight : 'bold'
    }
}

Welcome.propTypes = {
    name : PropTypes.string,
    style : PropTypes.object
}
export default Welcome;