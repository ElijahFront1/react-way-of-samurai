import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    console.log(props + 'dialogs');

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage} onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;