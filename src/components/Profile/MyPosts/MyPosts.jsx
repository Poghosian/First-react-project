import React from "react";
import s from './MyPosts.module.css'
import Post from './Posts/Post'
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {
            type: 'ADD-POST'
        };
        props.dispatch(addPostActionCreator(action))
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;

        let action = changeNewPostTextActionCreator(newText);
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3 >my posts</h3>
            <div className={s.newPost}>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                />
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts