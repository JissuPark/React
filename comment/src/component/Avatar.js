import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {
    user: PropTypes.object
};

function Avatar(props) {
    return (
        <div>
            <img
                className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        </div>
    );
}

export default Avatar;