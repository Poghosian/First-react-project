import React from "react"
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            <div className={s.messageImg}>
                IMG
            </div>
            <div className={s.messageText}>
                {props.message}
            </div>
        </div>
    )
}

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you ?' },
    { id: 3, message: 'Im fine thanks' },
    { id: 4, message: 'and how are you?' },
    { id: 5, message: 'Im fine' }
]

let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id} /> )
let dialogMessages = messages.map(m => (<Message id={m.id} message={m.message} key={m.id} />))

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {dialogMessages}
            </div>
        </div>
    )
}

export default Dialogs