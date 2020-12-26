import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {dialogs, messages} from './../../index';

const Dialogs = (props) => {

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;