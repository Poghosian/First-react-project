import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(p => <DialogItem id={p.id} name={p.name} key={p.id}/>)

    let dialogMessages = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

    let newMessageText = props.dialogsPage.newMessageText

    let onChangeMessage = (e) => {
        let newTextMessage = e.target.value;
        props.changeNewMessageText(newTextMessage)
    }

    let onAddMessage = () => {
        props.addMessage()
    }


    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {dialogMessages}
                </div>
            </div>
            <div>
                <textarea placeholder='Enter your message'
                          onChange={onChangeMessage}
                          value={newMessageText}/>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>

    )
}

export default Dialogs