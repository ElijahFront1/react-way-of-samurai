import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { subscribe } from './redux/state';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state'

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);
