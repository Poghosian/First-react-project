const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage
            return state
        default:
            return state;
    }



}

export default dialogsReducer