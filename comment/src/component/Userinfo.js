import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar.js';

Userinfo.propTypes = {
    
};

function Userinfo(props) {
    return (
        <div>
            <div className="UserInfo">
                <Avatar user={props.user}/>
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        </div>
    );
}

export default Userinfo;