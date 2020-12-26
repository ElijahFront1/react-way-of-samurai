import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    
    let posts = [
        { id: 1, message: "One message text", likesCount: 20 },
        { id: 2, message: "Two message text", likesCount: 10 },
    ]
    
    let postsElement = posts.map( p => <Post message={p.message} like={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    New post
            </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
};  
export default MyPosts;

