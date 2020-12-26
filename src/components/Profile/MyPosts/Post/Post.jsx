import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.avatar}>
                    avatar
            </div>
                <div>
                    {props.message}
                </div>
            </div>
            <div>
                <button>like</button>
                {props.like}
            </div>
        </div>
    );
};

export default Post;

