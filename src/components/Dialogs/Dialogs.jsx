import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id} /> )
    let dialogMessages = props.state.messages.map(m => (<Message id={m.id} message={m.message} key={m.id} />))
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