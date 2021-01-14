import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/reduxStore';

let renderEntireTree = (state) => { 
    // debugger;

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});
