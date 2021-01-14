import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {
    // debugger;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        // props.addPost();
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />);
};

export default MyPostsContainer;
