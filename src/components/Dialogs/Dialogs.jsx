import React from "react"
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsElements

    let dialogMessages = props.dialogMessages

    let newMessageText = props.newMessageText

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