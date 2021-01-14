import React from 'react';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMEssageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return ( <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMEssageClick} dialogsPage={state}/> )
}

export default DialogsContainer;