// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
//                 { id: 2, message: 'Its my firty post', likesCount: 1 },
//             ],
//             newPostText: 'it-project'
//         },
//         dialogsPage:{
//             dialogs: [
//                 { id: 1, name: 'Dimych' },
//                 { id: 2, name: 'Andrew' },
//                 { id: 3, name: 'Sveta' },
//                 { id: 4, name: 'Sasha' },
//                 { id: 5, name: 'Viktor' }
//             ],
//             messages: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How are you ?' },
//                 { id: 3, message: 'Im fine thanks' },
//                 { id: 4, message: 'and how are you?' },
//                 { id: 5, message: 'Im fine' }
//             ],
//             newMessageText: ''
//         },
//     },
//     _callSubscriber () {},
//     getState(){
//         return this._state
//     },
//     subscribe (obServer) {
//         this._callSubscriber = obServer;
//     },
//     dispatch(action) {
//
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
//
//
// export default store