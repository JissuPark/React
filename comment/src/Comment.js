import propTypes from 'prop-types';
import UserInfo from './component/Userinfo.js';

Comment.propTypes = {
    author: propTypes.string,
    text: propTypes.string,
    date: propTypes.object
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>    
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;