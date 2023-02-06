import React from "react";
import Post from './Posts/Post'
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let postsElements = state.profilePage.posts
    let newPostText = state.profilePage.newPostText

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(addPostActionCreator(action))
    }

    let changeNewPostChange = (newText) => {
        let action = changeNewPostTextActionCreator(newText);
        props.store.dispatch(action)

    }

    return <MyPosts addPost={addPost}  changeNewPostChange={changeNewPostChange} postsElements={postsElements} newPostText={newPostText}/>

}


export default MyPostsContainer