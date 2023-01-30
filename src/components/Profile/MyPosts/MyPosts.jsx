import React from "react";
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        })
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch({
            type: 'CHANGE-NEW-POST-TEXT',
            newText: newText
        })
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