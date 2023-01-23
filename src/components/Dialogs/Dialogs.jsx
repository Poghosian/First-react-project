import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// let dialogs = [
//     { id: 1, name: 'Dimych' },
//     { id: 2, name: 'Andrew' },
//     { id: 3, name: 'Sveta' },
//     { id: 4, name: 'Sasha' },
//     { id: 5, name: 'Viktor' }
// ]
//
// let messages = [
//     { id: 1, message: 'Hi' },
//     { id: 2, message: 'How are you ?' },
//     { id: 3, message: 'Im fine thanks' },
//     { id: 4, message: 'and how are you?' },
//     { id: 5, message: 'Im fine' }
// ]



const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id} /> )
    let dialogMessages = props.messages.map(m => (<Message id={m.id} message={m.message} key={m.id} />))
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