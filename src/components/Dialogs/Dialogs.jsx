import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const messageElements = React.createRef()

    let dialogsElements =
        props.dialogPageInfo.dialogs.map(d =>
            <DialogItem id={d.id} name={d.name} key={d.id} /> )

    let dialogMessages =
        props.dialogPageInfo.messages.map(m =>
            (<Message id={m.id} message={m.message} key={m.id} />))

    let onChangeMessage = (e) => {
        let newTextMessage = e.target.value;
        let action = changeNewMessageTextActionCreator(newTextMessage);
        // let  aa = getRandomInt(parseInt(newTextMessage))
        // console.log(aa)
        // function getRandomInt(max) {
        //     return Math.floor(Math.random() * max);
        // }
        props.dispatch(action)
    }

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action)
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
                          value={props.dialogPageInfo.newMessageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>

    )
}

export default Dialogs