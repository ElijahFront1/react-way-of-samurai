import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
