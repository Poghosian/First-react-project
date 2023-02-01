const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
let id = 6;
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
                { id: 2, message: 'Its my firty post', likesCount: 1 },
            ],
            newPostText: 'it-project'
        },
        dialogsPage:{
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
        },
    },
    _callSubscriber () {},
    getState(){
        return this._state
    },
    subscribe (obServer) {
        this._callSubscriber = obServer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === CHANGE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === SEND_MESSAGE){
            let newMessage = {
                id: id,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            id ++;
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if(action.type === CHANGE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newTextMessage
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostTextActionCreator = (newText) =>({
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
})


export const addMessageActionCreator = () => ({type: SEND_MESSAGE})

export const changeNewMessageTextActionCreator = (newTextMessage) =>({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newTextMessage: newTextMessage
})

// window.store = store








export default store