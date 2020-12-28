
import React from 'react';
import s from './FriendLink.module.css';

const FriendLink = (props) => {
    let name1 = props.state.friendsName[0].name;
    let name2 = props.state.friendsName[1].name;
    let name3 = props.state.friendsName[2].name;
    return (
        <div className={s.fiendsLinkWrapper}>
            <div >
                <div className={s.friendAvatar}>
                </div>
                <div className={s.friendName}>
                    {name1}
                </div>
            </div>
            <div>
                <div className={s.friendAvatar}>
                </div>
                <div className={s.friendName}>
                    {name2}
                </div>
            </div>
            <div>
                <div className={s.friendAvatar}>
                </div>
                <div className={s.friendName}>
                    {name3}
                </div>
            </div>
        </div>
    )
}

export default FriendLink;