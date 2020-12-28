import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text)
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
                <textarea ref={newMessage}>Add message</textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;