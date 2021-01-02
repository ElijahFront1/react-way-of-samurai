import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let newPost = React.createRef();
    console.log(props + 'posts');

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
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
