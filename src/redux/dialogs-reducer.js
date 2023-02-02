const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you ?' },
        { id: 3, message: 'Im fine thanks' },
        { id: 4, message: 'and how are you?' },
        { id: 5, message: 'Im fine' }
    ],
    newMessageText: ''
}

let dialogsReducer = (state = initialState, action) => {
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
export const addMessageActionCreator = () => ({type: SEND_MESSAGE})

export const changeNewMessageTextActionCreator = (newTextMessage) =>({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newTextMessage: newTextMessage
})



export default dialogsReducer