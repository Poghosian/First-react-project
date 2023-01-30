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
            ]
        },
    },
    getState(){
        return this._state
    },
    _callSubscriber () {},
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    changeNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (obServer) {
        this._callSubscriber = obServer;
    }
}

// window.store = store








export default store