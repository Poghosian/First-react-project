import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let dialogsElements =
        state.dialogsPage.dialogs.map(d =>
            <DialogItem id={d.id} name={d.name} key={d.id} /> )

    let dialogMessages =
        state.dialogsPage.messages.map(m =>
            (<Message id={m.id} message={m.message} key={m.id} />))

    let newMessageText = state.dialogsPage.newMessageText

    let changeNewMessageText = (newTextMessage) => {
        let action = changeNewMessageTextActionCreator(newTextMessage);
        props.store.dispatch(action)
    }

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action)
    }


    return <Dialogs changeNewMessageText={changeNewMessageText} addMessage={addMessage} dialogsElements={dialogsElements} dialogMessages={dialogMessages} newMessageText={newMessageText}/>

}

export default DialogsContainer