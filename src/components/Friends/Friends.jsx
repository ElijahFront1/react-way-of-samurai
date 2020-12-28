import React from 'react';
import FriendLink from './FriendLink/FriendLink';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div>
            <div>
                <h3>Friends</h3>
            </div>
            <div>
                <FriendLink state={props.state}/>
            </div>
        </div>
    )
}

export default Friends;