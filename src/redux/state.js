import {rerenderEntireTree} from '../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
            { id: 2, message: 'Its my firty post', likesCount: 1 },
        ],
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
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}



export default state