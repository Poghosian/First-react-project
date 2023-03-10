const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
        { id: 2, message: 'Its my firty post', likesCount: 1 },
        { id: 3, message: 'Its my firty post', likesCount: 1 },
    ],
    newPostText: 'it-project'
}

function profileReducer (state = initialState, action){
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostTextActionCreator = (newText) =>({
    type: CHANGE_NEW_POST_TEXT,
    newText: newText
})

export default profileReducer